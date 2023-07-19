import React from "react";
import { useState } from "react";
import "../styles/NoteEditor.css";

const NoteEditor = ({ note, editNote, setEdit }) => {
    const [title, setTitle] = useState(note.title);
    const [body, setBody] = useState(note.body);

    const saveEditedNote = (e) => {
        e.preventDefault();
        editNote({
            id: note.id,
            title: title,
            body: body,
        });
        setTitle("");
        setBody("");
        setEdit((current) => !current);
    };

    return (
        <div className="note-editor-container">
            <form className="note-editor">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="note-title"
                    type="text"
                    placeholder="Titulo"
                />
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="note-body"
                    rows="20"
                    type="text"
                    placeholder="añade una nota..."
                />
                <button onClick={saveEditedNote} className="save-btn">
                    Guardar
                </button>
            </form>
        </div>
    );
};

export default NoteEditor;
