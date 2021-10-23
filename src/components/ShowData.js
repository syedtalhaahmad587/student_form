import React from "react";



const ShowData = (props) => {
    return (
        <>
            <table>
                <tbody className={`settbody  ${props.tbody}`} >
                    <tr>
                    <td><input disabled type={props.type} name="" id="" /></td>
                {/* <td><input disabled type={props.type} name={props.name} value={props.Value} id=""/></td> */}
                {/* <td><input disabled type={props.type} name={props.name} value={props.Value} id=""/></td>
                <td><input disabled type={props.type} name={props.name} value={props.Value} id=""/></td>
                <td><input disabled type={props.type} name={props.name} value={props.Value} id=""/></td>
                <td><input disabled type={props.type} name={props.name} value={props.Value} id=""/></td>
                <td><input disabled type={props.type} name={props.name} value={props.Value} id=""/></td>
                <td><input disabled type={props.type} name={props.name} value={props.Value} id=""/></td> */}
                    </tr>
                </tbody>
            </table>
        </>
    )
}
{/* <button class="btn_eye"><i class="far fa-eye"></i></button><button class="btn_pen"><i class="fal fa-pen-square"></i></button><button class="btn_trash"><i class="far fa-trash-alt"></i></button> */}
export default ShowData;