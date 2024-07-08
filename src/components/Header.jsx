import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/Header.css"
export default function Header() {
  return (
    <div className="navbar">
    <Link className="brand-name" to="/">
      MyCrudApp
    </Link> 
    <div className="navbar-inner">
      <Link to="/" id="link-text">
        Home
      </Link>
      <Link to="/signup" id="link-text">
        SignUp
      </Link>
      <Link to="/login" id="link-text">
        Login
      </Link>
      <Link to="/view" id="link-text">
        View
      </Link>
    </div>
  </div>
  )
}
