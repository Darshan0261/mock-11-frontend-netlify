import React from "react";
import { Link, Router } from 'react-router-dom'

import css from '../css/Navbar.css'

function Navbar() {

    return (
        <div id="navbar">
            <a href="./">Home</a>
            <a href="./post">Post</a>
            <a href="./view">View</a>
        </div>
    )

}

export default Navbar;