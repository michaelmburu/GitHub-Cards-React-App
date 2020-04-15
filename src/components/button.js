import React, { useState } from "react";

function Button(props){
   
    
    const handleClick = () => props.onClick(props.increment);
    return(
    <div>
        <button onClick={handleClick}>{props.increment}</button>
    </div>
    )
}



export default Button