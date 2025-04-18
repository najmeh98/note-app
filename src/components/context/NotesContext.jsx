import React, { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);

function notesReducer(notes, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [...notes, action.payload];
    case "REMOVE_NOTE":
      return notes.filter((note) => note.id !== action.payload);
    case "COMPELETE_NOTE":
      return notes.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export default function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}
