import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'

const notes = [
  {id: 1,    content: 'HTML is easy',    important: true  },
  {id: 2,    content: 'Browser can execute only JavaScript',    important: false  },
  {id: 3,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes = {notes}/>
)
