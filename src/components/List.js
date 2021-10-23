import React from 'react'
import { FiEdit , FiDelete , FiEye  } from 'react-icons/fi'
import ShowData from './ShowData'

const List = (props) => {
    console.log(props)
    return (
        <>
        <div>
           <table className={`tableStyle ${props.className}`}>
               <thead className={`headStyle ${props.className}`}>
                   <tr className={props.Table_Row}>
                     {props.heading.map((head , index) => 
                         <th key={index}>{head}</th>
                      )}
                       {/*<th>Name</th>
                       <th>Father's Name</th>
                       <th>DOB</th>
                       <th>EmailAddress</th>
                       <th>Contact No</th>
                       <th>School Name</th>
                       <th>Class</th>
                       <th>Action</th>  */}
                   </tr> 

               </thead>
               <tbody className={`settbody  ${props.tbody}`}>
                   {props.list.map((data , index) => 
                    <tr key={index}>
                        <td><input type="text" value={data.username} disabled={data.disabled} onChange={(e)=> changeData(e.target.value , username , index) } /></td>
                        <td><input type="text" value={data.fatherName} disabled={data.disabled}  /></td>
                        <td><input type="text" value={data.dob}  disabled={data.disabled} /></td>
                        <td><input type="text" value={data.email}  disabled={data.disabled} /></td>
                        <td><input type="text" value={data.phone} disabled={data.disabled} /></td>
                        <td><input type="text" value={data.schoolN} disabled={data.disabled} /></td>
                        <td><input type="text" value={data.qualified} disabled={data.disabled} /> </td>
                        <td><span className="edit"  onClick={()=>props.clickEdit(index)}><FiEdit/></span><span className="Delete"><FiDelete  onClick={()=>props.clickDelt(index)}  /></span><span className="Eyes"  onClick={props.clickEye} ><FiEye/></span></td>
                    </tr>
                   )} 
               </tbody>
           </table>
           </div> 
        </>
    )
}

export default List;