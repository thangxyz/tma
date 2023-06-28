import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <header>         
        <a href className="logo">Viet<span>Dev</span></a>
        <div id="menu" className="fas fa-bars" />
        <nav className="navbar">
          <Link to ="/">Home</Link>
          <Link to ="/course">Course</Link>
          <Link to ="/teacher">Teacher</Link>
          <Link to ="/price">Price</Link>
          <Link to ="/contact">Contact</Link>
        </nav>
      </header>
      </div>
    )
  }
}
