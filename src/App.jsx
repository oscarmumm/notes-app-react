import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import NotesCollection from "./components/NotesCollection";

const getLocalData = () => {
    let notes = localStorage.getItem('saved-notes');
    if (notes) {
        return JSON.parse(localStorage.getItem('saved-notes'))
    } else {
        return [];
    }
}

function App() {
    const [notes, setNotes] = useState(getLocalData());
    const [isActive, setIsActive] = useState(false);

    const addNoteToCollection = (data) => {
        setNotes([...notes, data]);
    };

    const deleteFromCollection = (data) => {
        setNotes(notes.filter((el) => el.id !== data));
    };

    const editNote = (data) => {
        notes.forEach((el) => {
            if (el.id === data.id) {
                el.title = data.title;
                el.body = data.body;
            }
        });
    };

    const showNewNoteInterface = () => {
        setIsActive((current) => !current);
    };

    const showToastMsg = (data) => {
        console.log(data);
    };

    useEffect(() => {
        localStorage.setItem('saved-notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div className="app">
            <div className="header-container">
                <Header />
            </div>
            <div className="new-note-btn-container">
                <button onClick={showNewNoteInterface} className="new-note-btn">
                    {isActive ? (
                        <i className="bi bi-chevron-compact-up"></i>
                    ) : (
                        "Nueva nota"
                    )}
                </button>
                <div
                    className={
                        isActive
                            ? "expand new-note-container"
                            : "contract new-note-container"
                    }
                >
                    <NewNote
                        addNoteToCollection={addNoteToCollection}
                        showToastMsg={showToastMsg}
                    />
                </div>
            </div>
            <NotesCollection
                notes={notes}
                deleteFromCollection={deleteFromCollection}
                addNoteToCollection={addNoteToCollection}
                editNote={editNote}
            />
        </div>
    );
}

export default App;
