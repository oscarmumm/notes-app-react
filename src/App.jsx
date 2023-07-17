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
        console.log(data);
        setNotes(notes.filter((el) => el.title !== data));
    };

    const showNewNoteInterface = () => {
        setIsActive((current) => !current);
        console.log(isActive);
    };

    return (
        <div className="app">
            <Header />
            <div className="new-note-btn-container">
                <button onClick={showNewNoteInterface} className="new-note-btn">
                    Nueva nota
                </button>
                <div 
                    className={
                        isActive ? "expand new-note-container" : "contract new-note-container"
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
            <NotesCollection
                notes={notes}
                deleteFromCollection={deleteFromCollection}
            />
        </div>
    );
}

export default App;
