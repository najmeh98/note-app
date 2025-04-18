import "./App.css";
import React, { useState } from "react";
import AddNewNote from "./components/AddNewNote";
function App() {
  const [sortBy, setSortBy] = useState("latest");

  return (
    <div className="container">
      <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />

      <div className="note-app">
        <AddNewNote />

        <div className="note-container">
          <NoteStatus />

          <NoteList sortBy={sortBy} />
        </div>
      </div>
    </div>
  );
}

export default App;
