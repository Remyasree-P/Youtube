import { useEffect, useState } from "react";
import axios from 'axios'
import '../Styles/UserView.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';




const UserView = () => {
    let [data1, setdata] = useState([]);
    let [force]=useState(0);


    useEffect(() => {
        axios.get('http://localhost:1000/Videos')
        .then((response)=>{
            console.log(response.data);
            setdata(response.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [force])
       
    return (
        <div className="userview">
            {data1.map((x) => {
                return (
                    
                    <div className="display" align="center">
                        <iframe width="500" height="300" 
                        src={x.VideoUrl} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <br />
                        <h1>{x.title} ||</h1> 
                        <span id="des">{x.description}</span>
                        <span><VisibilityIcon/>{x.likes}k</span>
                        <span><ThumbUpAltIcon/>{x.views}k</span> <br />
                        <br /> <br />
                    </div>
                )
            })}
        </div>
    )
}
export default UserView;