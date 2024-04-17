import React from "react";


const Card = (props) => {

  // const styles = {
  //   width: "18 rem;",
  //   margin: "4px"
  // }
  return (<div className="container">
    <div className="card m-4 col-3;">
       <img src={props.image} className="card-img-top  h-auto object-fit-fill border rounded" alt="..." />
       <div className="card-body">
         <h5 className="card-title">{props.title}</h5>
         <p className="card-text">{props.description}</p>
       </div>
       <a href="#" className="btn btn-primary">{props.cta}</a>
     </div>
  </div>
    )
    
};

            export default Card;