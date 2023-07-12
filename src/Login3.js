import React, { Component } from 'react'
import './Login3.css';
import {Link} from 'react-router-dom'
export class Login3 extends Component {
  constructor(props){
    super(props);
    this.state={
        email:'',
        password:'',
        };
}
handleEmailChange = (event) => {
    this.setState({ mail: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      mail: this.state.mail,
      password: this.state.password,     
    };
};
  render() {
    return (
        <>
        <form onSubmit={this.handleSubmit}>
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
                        <h2>Log In</h2>
                        <div class="input-box">
                            <span class="icon"><i class='bx bxs-envelope'></i></span>
                            <input type="email" placeholder='Email-id' required value={this.state.username} style={{color:"white"}} onChange={this.handleEmailChange}/>
                        </div>
                        <div class="input-box">
                            <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                            <input minLength="8" pattern="^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$"
                    title="Password may only contain letters [ Both Uppercase and LowerCase ] and numbers" type="password" placeholder='Password'required value={this.state.password} style={{color:"white"}} onChange={this.handlePasswordChange}/>
                        </div>
                        <div class="remember-password">
                            <label for=""><input type="checkbox"/>Remember Me</label>
                            <a href="#">Forget Password</a>
                        </div>
                      <Link to="/home"> <button class="btn">Log In</button></Link> 
                        <div class="create-account">
                            <p>Don't have an Account? <Link to="/signup"><a href="#">Sign Up</a></Link> </p>
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
}
export default Login3
