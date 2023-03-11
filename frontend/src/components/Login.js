import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Login.css"
function Login() {
    return(
        <div className="bg-img">
        <div className="LoginBox">
            <div className="cover">
                <h3 className="">Login</h3>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <Link className='btn btn-success Login-btn'>Login</Link>
                <Link className="Register-btn" to="/register">Register</Link>
            </div>
        </div>
        </div>
    );
}
export default Login;