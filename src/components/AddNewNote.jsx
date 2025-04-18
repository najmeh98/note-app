import React, { useState } from "react";
import { useNotes } from "./context/NotesContext";

export default function AddNewNote() {
  const [title, setTtile] = useState("");
  const [description, setDescription] = useState("");

  const { dispatch } = useNotes();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toLocaleString(),
    };
    dispatch({ type: "add", payload: newNote });
    setTtile("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTtile(e.target.value)}
          className="text-field"
          placeholder="Note title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-field"
          placeholder="Note description"
        />

        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}
