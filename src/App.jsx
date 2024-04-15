import { useState, useEffect } from 'react'
import axios from 'axios'

import './css/App.css'
import reactLogo from '/images/nota_logo_2.jpg'
import viteLogo from '/images/nota_logo_1.jpg'

import Note from './components/Note'
import noteService from './components/communication'
import getDate from './components/GetDate'

const App = () => {
  const [notes, setNotes] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [newNote, setNewNote] = useState('Nota: ') 

  const hook = () => {
    console.log('effect')
    noteService.getAll()
               .then(response => {
                  console.log('promised fulfileeeed')
                  setNotes(response.data)
              })
  }
  useEffect(hook, []) 

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      userid: '111111',
      timestamp: getDate(),
      content: newNote,
    }

    noteService
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
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