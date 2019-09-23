import React from 'react'
import './style.css'

const Navbar = props => {
    return (
        <div className="navBar">
        <div className="container">
            <div className="row">
                <div className="col">
                    <a href="/" className="gameTitle"><h3>Clicky Game</h3></a>
                </div>
                <div className="col">
                    <span className="pointField">Score: {props.score} | High Score: {props.highScore}</span>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;