import React from 'react'
import './style.css'

const Footer = props => {
    return (
            <div className="footer">
                <img src={props.image} alt="react.logo" className="navImage" /> <span className="footerFont">Powered by React</span>
            </div>
    );
}

export default Footer;