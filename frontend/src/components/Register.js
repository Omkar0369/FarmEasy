import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Register.css"
function Register() {
  return (
    <div className="bg-img">
    <div className="RegisterBox">
            <div className="cover">
                <h3 className="">Register</h3>
                <input type="Email" placeholder="Email" />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <Link className='btn btn-success Login-btn' to='/login'>Register</Link>
            </div>
    </div>
    </div>
  )
}

export default Register