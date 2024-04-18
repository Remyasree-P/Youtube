import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminView from "./AdminView";
import Addvideo from "./Addvideo";
import AdminEdit from "./AdminEdit";
const AdminHomePage=()=>{
    return(
        <div className="adminhomepage">
        {/* <h1 >This is the page</h1> */}
        <AdminNavbar/>
        <Routes>
            <Route path="/adminview" element={<AdminView/>}/>
            <Route path="/addvideo" element={<Addvideo/>}/>
            <Route path="/adminedit/:id" element={<AdminEdit/>}/>
        </Routes>
    </div>
    )
} 
export default AdminHomePage;