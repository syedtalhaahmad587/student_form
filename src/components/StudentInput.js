import React from 'react'

const StudentInput = (props) => {
    return (
         <>
           <div className="Control_Panel">
           <label htmlFor={props.htmlFor}  className={`label_Set ${props.className ? "border_error1" : "" } `} >{props.Name} </label>
           <input type={props.type} placeholder={props.placeholder} id={props.Name} value={props.showValue}
            onChange={props.showChange} 
            className={`InputFeild ${props.className  ? "border_error"  : ""}`} />
           </div> 
        </>
    )
}


export default StudentInput;