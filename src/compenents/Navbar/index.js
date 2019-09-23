import React from 'react'
import './style.css'

const Navbar = props => {
    return (
    <div className="navBar">
        <span className="gameText">{props.game}</span><span className="pointField">Score: {props.score} | High Score: {props.highScore}</span>
    </div>
    );
}

export default Navbar;