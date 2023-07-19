import React from "react";
import "../styles/NotesCollection.css";
import SavedNote from "./SavedNote";

const NotesCollection = ({ notes, deleteFromCollection, editThisNote }) => {
    return (
        <ul className="notes-collection-container">
            {notes.length > 0 ? (
                notes.map((el) => <SavedNote deleteFromCollection={deleteFromCollection} editThisNote={editThisNote} key={el.title} notes={el} />)
            ) : (
                <h3>No hay notas guardadas</h3>
            )}
        </ul>
    );
};

export default NotesCollection;
