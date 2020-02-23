import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const activeLinkStyle = { color: "blue" };
    return (
        < nav >
            <NavLink to='/' activeStyle={activeLinkStyle} exact >Home</NavLink>
            {"|"}
            <NavLink to='/courses' activeStyle={activeLinkStyle} exact >Courses</NavLink>
            {"|"}
            <NavLink to='/about' activeStyle={activeLinkStyle}>About</NavLink>
        </nav >);
}


export default Header;