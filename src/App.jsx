import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import NotesCollection from "./components/NotesCollection";

function App() {
    const [notes, setNotes] = useState([]);

    const addNoteToCollection = (data) => {
      setNotes([
        ...notes,
        data
      ]);
    }

    const deleteFromCollection = (data) => {
      console.log(data)
      setNotes(
        notes.filter(el => el.title !== data )
      )
    }

    return (
        <div className="app">
            <Header />
            <NewNote addNoteToCollection={addNoteToCollection} />
            <NotesCollection notes={notes} deleteFromCollection={deleteFromCollection} />
        </div>
    );
}

export default App;
