import React from 'react'

const Header = (props) => {
    return (
    <div className="container-fluid bg-dark text-white">
        <div className="row">
            <div className="col mx-auto text-center">
                <h1>{props.game}</h1>
            </div>
        </div>
    </div>
    )
}

export default Header;