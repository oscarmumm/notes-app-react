import React from "react";
import "../styles/NotesCollection.css";
import SavedNote from "./SavedNote";

const NotesCollection = ({ notes, deleteFromCollection }) => {
    return (
        <ul className="notes-collection-container">
            {notes.length > 0 ? (
                notes.map((el) => <SavedNote deleteFromCollection={deleteFromCollection} key={el.title} notes={el} />)
            ) : (
                <h3>No hay notas guardadas</h3>
            )}
        </ul>
    );
};

export default NotesCollection;
