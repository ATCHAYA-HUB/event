import React from 'react'
import './Signup.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';
export default function Signup() {
  const[name,setName] = useState("");
  const[mail,setMail] = useState("");
  const[password,setPassword] = useState("");
  const[cont,setCont] = useState("");
  
  const handleChange = (e) => {
      e.preventDefault()
      if(mail.length !== 0 && (/$^|.+@.+..+/).test(mail) && password.length >= 8 && name.length !==0 && cont.length>9){
          window.location.href = "./Home";
      }
  }
  return (
    <>
    <form>
    <body>
   <header class="header">
   </header>
    
    <div class="background1"></div>
    <div class="container1">
        <div class="item">
            <h2 class="logo">Welcome to
             iDo EventZ</h2>
            <div class="text-item">
                <p>We don't rermember the days,<br></br>but rather the moments!</p>
            </div>
        </div>
        <div class="login-section">
            <div class="form-box login">
                <form action="">
                    <h2>Sign Up</h2>
                    <div class="input-box">
                        <input type="text" placeholder='UserName' required   onChange = {e => setName(e.target.value)}/>
                        <div className='error'>{name.length===0?"Enter Your Name":""}</div>
                    </div>
                    <div class="input-box">
                        <input type="text" placeholder='City' required   onChange = {e => setName(e.target.value)}/>
                        <div className='error'>{name.length<3?"Enter City":""}</div>
                    </div>
                    <div class="input-box">
                        <input type="tel" minLength="10" pattern="[0-9]{10}" placeholder='Contact-No' required onChange = {e => setCont(e.target.value)}/>
                        <div className='error'>{cont.length<10?"Enter Valid Contact No":""}</div>

                    </div>
                    <div class="input-box">
                        <input type="email" placeholder='Email-id' required onChange = {e => setMail(e.target.value)}/>
                        <div className='error'> {mail.length === 0 || !((/$^|.+@.+..+/).test(mail))?"Enter a valid email" : ""}</div>

                    </div>
                    <div class="input-box">
                        <input type="password" pattern="^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$"
                title="Password may only contain letters [ Both Uppercase and LowerCase ] and numbers" placeholder='Password'required  onChange = {e => setPassword(e.target.value)}/>
                    <div className='error'>{password.length < 8  ?"Password should be atleast 8 digits" : ""} </div>
                    </div>
                    <Button onClick={handleChange} class="btn">Sign Up</Button>
                    <div class="create-account">
                        <p>Have an Account? <Link to="/signin">Log In</Link> </p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    
</body>
</form>
</>
  )
}
