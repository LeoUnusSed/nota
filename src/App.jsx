import { useState } from 'react'
import reactLogo from '/images/nota_logo_2.jpg'
import viteLogo from '/images/nota_logo_1.jpg'
import './css/App.css'
import Note from './components/Note'
// style={{ background: '#0652c0', color: 'var(--light-color)', alignSelf: 'flex-start', borderRadius: '10px 10px 3px 10px' }}>

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const showTime = today.getHours() + ':' + today.getMinutes() ;
  return `${month}/${date}/${year} ${showTime}`;
}

function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('Nota: ') 

	let myDate = getDate();

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      timestamp: getDate(),
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
    
      <div class="topp">
        <a href="https://hypech.com" target="_blank"><img src={viteLogo} className="logo" alt="Vite logo" /></a>
        <a href="https://hypech.com" target="_blank"><img src={reactLogo} className="logo react" alt="React logo" /></a>
        <h3>Nota: Minimalist notes</h3>
      </div>

      <div class="container">
        <div class="chat-body">
          <ul class="chatbot-message"> 
            {notes.map(note => 
              <Note key={note.id} note={note} />
            )}
          </ul>
        </div>

        <div class="chat-input">
          <form onSubmit={addNote} className="chat-form">
            
            <textarea 
              placeholder="Type a note..."
              value={newNote}
              onChange={handleNoteChange}
              rows={2} // Adjust the number of rows as needed
            />
            <button type="submit">Send</button>
          </form>
        </div>

        <p className="read-the-docs">The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing.</p>

      </div>
    </>
  )
}

export default App