import React from "react";


const SmallError = (props) => {

    return (
        <>
           <span className={`showError  ${props.className}`}>{props.Error}</span> 
        </>
    )
}
export default SmallError;