import { useState } from 'react'
import reactLogo from '/images/nota_logo_2.jpg'
import viteLogo from '/images/nota_logo_1.jpg'
import './css/App.css'
import Note from './components/Note'

function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...') 

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <>
      <div>
        <a href="https://hypech.com" target="_blank"><img src={viteLogo} className="logo" alt="Vite logo" /></a>
        <a href="https://hypech.com" target="_blank"><img src={reactLogo} className="logo react" alt="React logo" /></a>
      </div>
      
      <h1>Nota: Focus on what's essential.</h1>
      <div className="card">
        <ul>
          {notes.map(note => 
            <Note key={note.id} note={note} />
          )}
        </ul>

        <form onSubmit={addNote} className="chat-form">
          
          <textarea 
            placeholder="Type a note..."
            value={newNote}
            onChange={handleNoteChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                addNote(); // Call addNote function on Enter key press
              }}}
            rows={5} // Adjust the number of rows as needed
          />
          <button type="submit">Send</button>
        </form>
      </div>

      <p className="read-the-docs">The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing.</p>

      <div>
      </div>

    </>
  )
}


export default App
