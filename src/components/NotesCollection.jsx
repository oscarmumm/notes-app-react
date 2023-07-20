import React from "react";
import "../styles/NotesCollection.css";
import SavedNote from "./SavedNote";

const NotesCollection = ({ notes, deleteFromCollection, addNoteToCollection, editNote }) => {
    return (
        <ul className="notes-collection-container">
            {notes.length > 0 ? (
                notes.map((el) => (
                    <SavedNote
                        deleteFromCollection={deleteFromCollection}
                        addNoteToCollection={addNoteToCollection}
                        editNote={editNote}
                        key={el.id}
                        notes={el}
                    />
                ))
            ) : (
                <h3 className="no-notes-msg">No hay notas guardadas</h3>
            )}
        </ul>
    );
};

export default NotesCollection;
