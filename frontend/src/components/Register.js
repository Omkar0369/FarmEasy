import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Register.css"
import axios from 'axios'
function Register() {
  const onRegister = async (ev) => {
		ev.preventDefault();
    let Email = document.getElementById("Email").value;
    let Password = document.getElementById("Password").value;
    console.log("/register")
    console.log(await axios.post('/register',{name:"abcd",email:Email,password:Password, role:"user"}))
  }
  return (
    <div className="bg-img">
    <div className="RegisterBox">
            <div className="cover">
                <h3 className="">Register</h3>
                <form onSubmit={onRegister}>
                  <input type="Email" placeholder="Email" id='Email'/>
                  <input type="password" placeholder="Password" id='Password'/>
                  <input type="password" placeholder="Confirm Password" />
                  <button type='submit' className='btn btn-success Login-btn'>Register</button>
                </form>
            </div>
    </div>
    </div>
  )
}

export default Register