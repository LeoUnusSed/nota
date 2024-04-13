import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'

const notes = [
  {id: 31,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
  {id: 36,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
  {id: 37,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
  {id: 32,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
  {id: 33,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
  {id: 34,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
  {id: 35,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
  {id: 38,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
  {id: 39,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
  {id: 30,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
  {id: 13,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
  {id: 23,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
  {id: 43,    content: 'GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
  {id: 1,    content: 'HTML is easy',    important: true  },
  {id: 2,    content: 'Browser can execute only JavaScript',    important: false  },
  {id: 3,    content: '11111111111111111111111111 GET and POST are the most important methods of HTTP protocol The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. The minimalist note-taking app for daily tasks and journaling. Write, remember, forget nothing. ',    important: true  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes = {notes}/>
)

