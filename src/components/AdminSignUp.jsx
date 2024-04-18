import { useState } from 'react';
import axios from 'axios';
import '../Styles/AdminSignUp.css'
const AdminSignUp = ()=>{
    let[name,setname] = useState("");
    let[dob,setdob] = useState("");
    let[email,setemail] = useState("");
    let[phone,setphone] = useState("");
    let[password,setpassword] = useState("");

    let data = {name,dob,email,phone,password}

    let addAdmin = (e)=>{
        e.preventDefault()
        fetch('http://localhost:1000/Admin',{
            method : "POST",
            headers:{"Content-Type":"Application/json"},
            body: JSON.stringify(data)
        })
        // axios.post('http://localhost:1000/Admin',data)
        .then((res)=>{
            console.log(res);
            alert("Data Added Successfully")
        })
        .catch((err)=>{
            console.log(err);
            alert("Inavlid Data")
        })
    }
    return(
         <div className="adminsignup">
            <form onSubmit={addAdmin} action="">
                <label htmlFor="">
                    Name: <input value={name} type="text" onChange={(e)=>{setname(e.target.value)}} placeholder="Enter the Name" />
                </label>
                <br />
                <label htmlFor="">
                    DOB: <input value={dob} onChange={(e)=>{setdob(e.target.value)}} type="date" />
                </label>
                <br />
                <label htmlFor="">
                    Email: <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder="Enter the Email" />
                </label>
                <br />
                <label htmlFor="">
                    Phone No: <input type="tel" value={phone} onChange={(e)=>{setphone(e.target.value)}} pattern="[6789][0-9]{9}" placeholder="Enter Phone Number" />
                </label>
                <br />
                <label htmlFor="">
                    Password: <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter the Password" />
                </label>
                <br />
                <button>Register</button>
            </form>
         </div>  

    );
}
export default AdminSignUp;