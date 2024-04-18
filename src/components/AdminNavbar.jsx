import { Link } from "react-router-dom";
import "../Styles/AdminNavbar.css"
const AdminNavbar=()=>{
    return(
        <div className="adminnavbar">
            <div className="logo">
                <img src="https://betanews.com/wp-content/uploads/2017/08/new-youtube-logo.jpg" alt="" />
            </div>
            <div className="options">
                <Link to="/adminhomepage/adminview">view</Link>
                <Link to="/adminhomepage/addvideo">Add video</Link>
                {/* <Link to="/adminhomepage/adminedit">AdminEdit</Link> */}
            </div>  
        </div>
    );
}
export default AdminNavbar;