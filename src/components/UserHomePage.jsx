import { Routes , Route } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserView from "./UserView";


const UserHomePage = () =>{
    return(
        <div className="userhomepage">
            <UserNavbar/>
            <UserView/>
            {/* <Routes>
                <Route path="/userview" element={<UserView/>}/>
            </Routes> */}
        </div>
    );
}
export default UserHomePage;