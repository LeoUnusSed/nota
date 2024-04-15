import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import reactLogo from '/images/nota_logo_2.jpg'
import viteLogo from '/images/nota_logo_1.jpg'
import '/src/css/login.css'

const Login = ()=>{
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSaveClick = (event) => {
    console.log('event.target.value')
    setShowLoginForm(true);};
  
  const handleLoginRegisterClick = (event) => {
    event.preventDefault()
    axios.post("http://localhost:3001/login", { email, password })
    .then(result => {
        console.log(result)
        if(result.data === "Success"){
            console.log(event.target.value)
            alert("Logined!")
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
        {!showLoginForm && (<button onClick={handleSaveClick}>Save</button>)}

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

        {/* <form onSubmit={handleLogin} className="screen-1"> */}
        {/* <form onSubmit={handleLogin} className="login-form"> */}
                
                {/* <div className="email">
                    <input type="text" 
                    placeholder='Enter Email' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0' 
                    onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className="password">
                    <input type="password" 
                    placeholder='Enter Password' 
                    name='password' 
                    className='form-control rounded-0' 
                    onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <button type="submit" className="login">
                    Login
                </button>
                </form> */}

      </div>
    </>
  )
}

export default Login