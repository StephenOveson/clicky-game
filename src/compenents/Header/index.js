import React from 'react'

const Header = (props) => {
    return (
    <div className="container-fluid bg-dark text-white">
            <div className="col mx-auto text-center jumbotron bg-dark">
                <h1>{props.game}</h1>
            </div>
    </div>
    )
}

export default Header;