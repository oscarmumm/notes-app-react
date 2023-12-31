import React from "react";
import { useState } from "react";
import "../styles/NewNote.css";

const NewNote = ({addNoteToCollection, showToastMsg}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const saveNote = (e) => {
        e.preventDefault();
        addNoteToCollection({
            id: Date.now(),
            title: title,
            body: body
        })
        setTitle('')
        setBody('')
        showToastMsg('Nota guardada')
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
