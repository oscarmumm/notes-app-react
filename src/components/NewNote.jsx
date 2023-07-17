import React from "react";
import { useState } from "react";
import "../styles/NewNote.css";

const NewNote = ({addNoteToCollection}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const saveNote = (e) => {
        e.preventDefault();
        addNoteToCollection({
            title: title,
            body: body
        })
        setTitle('')
        setBody('')
    }

    return (
        <form>
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
            <button onClick={saveNote} className="save-btn">Guardar</button>
        </form>
    );
};

export default NewNote;
