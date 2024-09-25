import React from "react";

import './style.css';

const Header = (props) => {
    return (
        <header className='header' >
            <h1 className='header__title' >My TODO List</h1>
            <h2 className='header__greeting' >Hello, <span>{props.name}</span>! Let's get started?</h2>
        </header>
    )
}

export default Header;