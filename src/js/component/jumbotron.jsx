import React from "react";

const Jumbotron = (props) =>{
    return (<div className="jumbotron bg-light p-4 justify-content-center">
    <h1 className="display-4">{props.titulo}</h1>
    <p className="lead">{props.texto}</p>
    <hr className="my-4"/>
    <p>{props.otrotexto}</p>
    <a className="btn btn-primary btn-lg" href="#" role="button">{props.jumbutton}</a>
  </div>)
};

export default Jumbotron;