import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Login.css"
import axios from 'axios';
function onLogin(){
    let Email = document.getElementById("Email");
    let Password = document.getElementById("Password");
    axios.post('/login',{email:Email,password:Password})
}
function Login() {
    return(
        <div className="bg-img">
        <div className="LoginBox">
            <div className="cover">
                <h3 className="">Login</h3>
                <input type="text" placeholder="Email" id="Email" />
                <input type="password" placeholder="Password" id="Password"/>
                <Link className='btn btn-success Login-btn' onClick={onLogin()}>Login</Link>
                <Link className="Register-btn" to="/register">Register</Link>
            </div>
        </div>
        </div>
    );
}
export default Login;