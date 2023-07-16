import React from "react";
import "../styles/SavedNote.css";

const SavedNote = ({ notes, deleteFromCollection }) => {

    const deleteNote = () => {
      deleteFromCollection(notes.title)
    }

    return (
        <li className="saved-note">
            <h6 className="saved-note-title">{notes.title}</h6>
            <p className="saved-note-body">{notes.body}</p>
            <div className="saved-notes-btn-container">
                <button className="saved-note-btn">
                    <i className="bi bi-pencil-square"></i>
                </button>
                <button onClick={deleteNote} className="saved-note-btn">
                    <i className="bi bi-trash3-fill"></i>
                </button>
            </div>
        </li>
    );
};

export default SavedNote;
