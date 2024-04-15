import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

import reactLogo from '/images/nota_logo_2.jpg'
import viteLogo from '/images/nota_logo_1.jpg'
import '/src/css/login.css'

const Login = ({ onLogin })=>{
  const [showLoginForm,setShowLoginForm] = useState(false);
  const [showSaveButton,setShowSaveButton] = useState(true);
  const [showWelcome,  setShowWelcome]   = useState(true);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSaveClick = (event) => {
    console.log('event.target.value')
    setShowSaveButton(false);
    setShowLoginForm(true);};
  
  const handleLoginRegisterClick = (event) => {
    event.preventDefault()
    axios.post("http://localhost:3001/login", { email, password })
    .then(result => {
        console.log(result)
        if(result.data.status === "Success"){
            const userId = result.data.userId
            onLogin(userId);
            setShowLoginForm(false);
            setShowWelcome(false);
        }else{
            // navigate("/register")
            event.preventDefault()
            alert("You are not registered to this service")
            axios.post("http://localhost:3001/register", { email, password })
            .then(result => {console.log(result)
              alert("You are registered to service")
            })
            .catch(err => console.log(err))
        }
    })
    .catch(err => console.log(err))
  }
  
  return(
    <>
      <div class="topp">
        <a href="https://hypech.com" target="_blank"><img src={viteLogo} className="logo" alt="Vite logo" /></a>
        <a href="https://hypech.com" target="_blank"><img src={reactLogo} className="logo react" alt="React logo" /></a>
        
        <h3>Nota: Minimalist notes</h3>
        {showSaveButton && (<button onClick={handleSaveClick}>Save</button>)}

        {showLoginForm && (
          <section class="login-form-wrap">
            <form onSubmit={handleLoginRegisterClick} className="login-form">
              <label>
                <input type="email" name="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              </label>
              <label>
                <input type="password" name="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              </label>
              <input type="submit" value="Login/Register" />
            </form>
          </section>
        )}

        {!showWelcome && (
          <section class="login-form-wrap">
            <h4>Welcome</h4>
            {email}
            <p>The Memo saved!</p>
          </section>
        )}

      </div>
    </>
  )
}

export default Login