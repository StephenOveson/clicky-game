import React from 'react';
import './style.css'

const Card = props => {
    return (
            <div className="card" onClick={() => props.handleScore(props.id)}>
                <div className="img-container">
                    <img className="cardImage" src={props.image} id={props.id} alt="Aang" />
                </div>
            </div>
    )
}

export default Card;