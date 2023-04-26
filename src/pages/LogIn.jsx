import React, { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";

function mouseOver(event) {
    event.target.style.color = 'white';
}
function mouseOut(event) {
    event.target.style.color = 'rgba(255, 255, 255, 0.789)'
}


function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (<div className="aligned">
        <h1 className="page-title">Take another step toward self awareness</h1>
        <form className="form">
            <Input 
            type="text"
            name="email"
            placeholder="Email Address"
            autofocus
            />
            <Input 
            type="password" 
            name="password"
            placeholder="Password"
            />
            <button className="login-button" type="submit">Sign In</button>
            
        </form>

        <Link className="ref" onMouseEnter={mouseOver} onMouseLeave={mouseOut} to="/register">or create an account</Link>
        
    </div>)

}

export default LogIn;
export { mouseOver, mouseOut };