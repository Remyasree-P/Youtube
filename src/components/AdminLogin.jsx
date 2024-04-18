import { useState } from 'react';
import '../Styles/AdminLogin.css'
import { Link,useNavigate } from 'react-router-dom'
const AdminLogin = () => {
    let [uname, setuname] = useState("");
    // console.log(uname);
    let [password, setpassword] = useState("");
    // console.log(password);
    let navigate=useNavigate()
    let adminlogin=()=>{
        if(uname=="abcd" && password==1234){
            alert("login is succesfull")
            navigate('/adminhomepage')
        }
        else{
            alert("invalid credentials")
        }
    }
    return (
        <div className="adminlogin">
            <form action="">
                <label htmlFor="">
                    Username:<input value={uname} onChange={(e) =>{setuname(e.target.value); }} type="text" placeholder="Enter the username" />
                </label>
                <br /> <br />
                <label htmlFor="">
                    Password: <input value={password} onChange={(e) =>{setpassword(e.target.value)}} type="password" placeholder="Enter the password" />
                </label>
                <br /> <br />
                <button onClick={adminlogin}>Login</button>
                <br /> <br />
                <span>Are you the new user? <Link to='/adminsignup'>Register</Link> </span>
            </form>
        </div>
    );
}
export default AdminLogin;