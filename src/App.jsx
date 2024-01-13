import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import EditNotes from "./pages/EditNotes";
import {useEffect, useState} from "react";
function App() {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes]);
  return (
    <main id="app">
      <Router>
        <Routes>
          <Route path="/" element={<Notes notes={notes}/>}/>
          <Route path="create-note" element={<Create setNotes={setNotes} />} />
          <Route path="edit-note/:id" element={<EditNotes notes={notes} setNotes={setNotes} />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
