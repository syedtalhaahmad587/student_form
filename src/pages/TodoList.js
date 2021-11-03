import React, { useState } from 'react';
import StudentInput from '../components/StudentInput'
import BtnField from '../components/BtnField';
import './Record.css'
import List from '../components/List'; 
import SmallError from '../components/SmallError';
import ShowRecord from '../components/ShowRecord'
  
const initailState = ({
        username : "",
        fatherName : "",
        dob : "",
        email: "",
        phone: "", 
        schoolN: "",
       qualified: "",
})

const TodoList = () => {
    const [data , setdata] = useState(initailState)
    const [list, setList] = useState([])
    const [success, setSuccess] = useState(false)
   const [Error, SetError] = useState({
       usererror : "",
       fathererror : "",
       doberror : "",
       emailerror : "",
       contacterror : "",
       Schoolerror : "",
       classerror : "" 
   })


    const changeInput = (value, property , errorpro ) => {
        setdata({ ...data , [property] : value })
        SetError({...Error , [errorpro] : value })

    }
    const randerInput = (e) => {
        e.preventDefault()
       
        if(!data.username && !data.fatherName && !data.dob && !data.email && !data.phone && !data.schoolN  && !data.qualified ){
        setSuccess(false)
            SetError({...Error , usererror :  "Please enter username" , 
             fathererror : "Please enter fatherName" , doberror 
             : "Please enter Dirthofbirth" ,  emailerror : "Please enter email" ,
              contacterror :  "Please enter phone Number"  , Schoolerror : 
              "Please enter School Name" , classerror : "please enter qualified" })
        }else{
            let usererror , fathererror , doberror , emailerror , contacterror , Schoolerror , classerror = ""
            if(!data.username)
               usererror = "please enter username" 
            else{
                if(data.username.length < 3 )
                      usererror = "Username need to be a 6 characters"
             else if(data.username.length > 30 )
            usererror = "Username need to be a 30 characters"
        }
          if(!data.fatherName)
            fathererror = "Please enter fathername"   
          if(!data.dob)
             doberror = "Please enter date of birth"
          if(!data.email)   
                   emailerror = "Please enter email"
            else {
                const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if (!emailRegex.test(data.email))
                    emailerror = "Incorrect Email Format"
            } 
            if(!data.phone) {
            contacterror = "Please enter phone number"
            }else{
                contacterror = ""
            } 
            if(!data.schoolN)
            Schoolerror = "Please enter School Name"
            if(!data.qualified)
            classerror = "Please enter Class Name"
            if(!usererror && !fathererror && !doberror  && !emailerror &&  !contacterror && !Schoolerror && !classerror) {
                data.disabled = true;
                setList([...list, data])  
                setdata(initailState);
    }
    
        else{
        setSuccess(false)
        SetError({...Error , usererror , fathererror , doberror , emailerror , contacterror , Schoolerror , classerror})      
    }   
    }  
   
    }

    const editClicks = (index) =>{
        list[index].disabled  = false
        setList([...list])
        // console.log(setList([...list]));
    }
    const deltInput = (index) => {
       list.splice([index] , 1 )
       console.log(list);
       setList([...list])
    }

    const itemChange = (value,property,index) => {
        list[index][property] = value
            setList([...list])
    }

    const Save = (index) => {
           list[index].disabled = true
           setList([...list]); 
    }
    return (
        <>
        <div className="heading"> 
        <h1>Add New Student's Record</h1>
        {success && <h4 className="success">Form submitted successfully</h4>}
        </div>
        <form>
        <StudentInput  htmlFor="Name"    
        type="text" Name="Name" className={Error.usererror ? "border_error" : ""}
        placeholder="Enter Your Name" showValue={data.username} showChange={(e)=> changeInput(e.target.value , "username" ) } />       
         <SmallError Error={Error.usererror}/> 
        <StudentInput htmlFor="Father's Name"  
        type="text" Name="Father's Name" className={Error.fathererror ? "border_error" : "" }
        placeholder="Enter Your Father's Name" showValue={data.fatherName} showChange={(e)=> changeInput(e.target.value , "fatherName")} />
       <SmallError Error={Error.fathererror} />
        <StudentInput htmlFor="DOB" type="date" Name="DOB" className={Error.doberror ? "border_error" : "" } 
        showValue={data.dob} 
        showChange={(e)=> changeInput(e.target.value , "dob")} />
        <SmallError Error={Error.doberror}/>
        <StudentInput htmlFor="Email Address" className={Error.emailerror ? "border_error" : "" }
        type="email" Name="Email Address" 
        placeholder="Enter Email Address" showValue={data.email} showChange={(e)=> changeInput(e.target.value , "email")} />
         <SmallError Error={Error.emailerror}/>
        <StudentInput htmlFor="Contact No" className={Error.contacterror ? "border_error" : "" }
        type="number" Name="Contact No" 
        placeholder="Enter Contact Number" showValue={data.phone} showChange={(e)=> changeInput(e.target.value , "phone")} />
         <SmallError Error={Error.contacterror}/>
        <StudentInput htmlFor="School Name" className={Error.Schoolerror ? "border_error" : "" }
        type="text" Name="School Name"  
        placeholder="Enter Your School Name" showValue={data.schoolN} showChange={(e)=> changeInput(e.target.value , "schoolN")} />
         <SmallError Error={Error.Schoolerror}/>
        <StudentInput htmlFor="Class" type="Number" className={Error.classerror ? "border_error" : "" }
        Name="Class" placeholder="Enter Your School Name" showValue={data.qualified} showChange={(e)=> changeInput(e.target.value , "qualified")}/>
        <SmallError Error={Error.classerror}/> 
        <div className="Main_Container">
         <BtnField buttonName="Submit" onclick={(e) => randerInput(e)}  Btn_Primary />
         <BtnField buttonName="Cancel"/>
         </div>
         </form>
        <List heading={["Name", "Father Name", "Date of Birth", "EmailAddress", "Contact No", "School Name", "Class" ,"Action"]} list={list} 
        Table_Row="tableStyle"  clickEdit={editClicks} clickDelt={deltInput} changeData={itemChange} changeText={Save}/>
       <div className="container_wrap"><ShowRecord  clickEye="" /></div> 
     </>
     )
}


export default TodoList;