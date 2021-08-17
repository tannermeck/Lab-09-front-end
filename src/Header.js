import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/create">Create Dirtbike</NavLink>
            </div>
         );
    }
}
 
export default Header;