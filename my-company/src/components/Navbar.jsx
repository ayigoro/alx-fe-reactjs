import { Link } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

const Navbar = () => {
  return (
    <nav className="navbar" style={{display :'flex', justifyContent:'space-around', gap :'20px',backgroundColor:'blue'}}>
      <Link to = "/">Home</Link>
      <Link to = "/about">About</Link>
      <Link to = "/contact">Contact</Link>
      <Link to = "/services">Services</Link>
    </nav>
  )
}

export default Navbar