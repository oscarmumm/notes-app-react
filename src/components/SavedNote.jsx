import React, { useState } from "react";
import "../styles/SavedNote.css";
import NoteEditor from "./NoteEditor";

const SavedNote = ({
    notes,
    deleteFromCollection,
    editNote
}) => {
    const [edit, setEdit] = useState(false);

    const deleteNote = () => {
        deleteFromCollection(notes.id);
    };

    const editNoteState = () => {
        setEdit((current) => !current);
    };

    return (
        <li className="saved-note">
            <h6 className="saved-note-title">{notes.title}</h6>
            <p className="saved-note-body">{notes.body}</p>
            <div className="saved-notes-btn-container">
                <button onClick={editNoteState} className="saved-note-btn">
                    <i className="bi bi-pencil-square"></i>
                </button>
                <button onClick={deleteNote} className="saved-note-btn">
                    <i className="bi bi-trash3-fill"></i>
                </button>
            </div>
            <div>
                {edit ? (
                    <NoteEditor
                        editNote={editNote}
                        note={notes}
                        setEdit={setEdit}
                    />
                ) : (
                    <></>
                )}
            </div>
        </li>
    );
};

export default SavedNote;
