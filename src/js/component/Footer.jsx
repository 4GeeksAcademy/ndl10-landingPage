import React from "react";

const Footer= (props) =>{
    return (
        <div className="text-center">
            <p className="bg-success">Made with loooove by {props.madeIn}</p>
        </div>
    )
}

export default Footer;