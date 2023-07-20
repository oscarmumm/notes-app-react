import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import NotesCollection from "./components/NotesCollection";

function App() {
    const [notes, setNotes] = useState([]);
    const [isActive, setIsActive] = useState(false);

    const addNoteToCollection = (data) => {
        setNotes([...notes, data]);
    };

    const deleteFromCollection = (data) => {
        setNotes(notes.filter((el) => el.id !== data));
    };

    const editNote = (data) => {
        console.log(data);
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

    return (
        <div className="app">
            <div className="left-side-desktop">
                <Header />
                <div className="new-note-btn-container">
                    <button
                        onClick={showNewNoteInterface}
                        className="new-note-btn"
                    >
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
                        <NewNote addNoteToCollection={addNoteToCollection} />
                    </div>
                </div>
                <div
                    className={
                        isActive ? "desplegar new-note" : "contraer new-note"
                    }
                ></div>
            </div>
            <div className="right-side-desktop">
                <NotesCollection
                    notes={notes}
                    deleteFromCollection={deleteFromCollection}
                    addNoteToCollection={addNoteToCollection}
                    editNote={editNote}
                />
            </div>
        </div>
    );
}

export default App;
