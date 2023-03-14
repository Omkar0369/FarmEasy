import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../CSS/Login.css"
import axios from 'axios';
function Login() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    async function onLogin(event){
		event.preventDefault();
        let Email = document.getElementById("Email").value;
        let Password = document.getElementById("Password").value;
        console.log("/login")
        console.log(await axios.post('/login',{email:Email,password:Password}))
    }
    return(
        <div className="bg-img">
        <div className="LoginBox">
            <div className="cover">
                <h3 className="">Login</h3>
                <form onSubmit={onLogin}>
                    <input type="text" placeholder="Email" id="Email" />
                    <input type="password" placeholder="Password" id="Password"/>
                    <button type="submit" className='btn btn-success Login-btn'>Login</button>
                    <Link className="Register-btn" to="/register">Register</Link>
                </form>
            </div>
        </div>
        </div>
    );
}
export default Login;