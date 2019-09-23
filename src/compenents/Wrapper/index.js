import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper mx-auto">{props.children}</div>;
}

export default Wrapper;
