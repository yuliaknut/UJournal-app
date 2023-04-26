import React from "react";
import Input from "../components/Input";
import { mouseOver, mouseOut } from "./LogIn";
import { Link } from "react-router-dom";

function SignUp() {
    return (<div className="aligned">
        <h1 className="page-title">Take another step toward self awareness</h1>
        <form className="form">
            <Input 
            type="text"
            placeholder="Email Address"
            />
            <Input 
            type="password"
            placeholder="Password"
            />
            <Input 
            type="password"
            placeholder="Confirm Password"
            />
            <button className="login-button" type="submit">Register</button>
        </form>

        <Link to="/login" className="ref" onMouseEnter={mouseOver} onMouseLeave={mouseOut}>I already have an account</Link>

    </div>)

}

export default SignUp;