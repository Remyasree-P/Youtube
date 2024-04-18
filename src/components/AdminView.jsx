import{useEffect,useState} from "react";
import axios from "axios";
import '../Styles/Adminview.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
const AdminView = ()=>{
    let[data1,setdata]= useState([]);
    let navigate=useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:1000/video')
        .then((response)=>{
            console.log(response.data);
            setdata(response.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[data1])
    //     fetch('http://localhost:1000/Videos')
    //     .then((res)=>{
    //         res.json()
    //         .then((data)=>{
    //             console.log(data);
    //             setdata(data);
    //         })
    //         .catch((err)=>{
    //             console.log(err);
    //         });
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     });
    // }, []);
    let editvid=((id)=>{
        navigate(`/adminhomepage/adminedit/${id}`)
    })
    let remove=(id,title)=>{
        axios.delete(`http://localhost:1000/video/${id}`)
        .then(()=>{
            alert(`${title} has been removed successfully`)
        })
        .catch(()=>{
            alert("video not found")
        })
    }

    return(
     <div className="adminview">
        {
            data1.map((x)=>{
                return(


                <div className="display">
                    <iframe width="560" height="315" src={x.VideoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    <h3>{x.title} || </h3>
                    <span><VisibilityIcon/>{x.likes}K</span>
                    <span><ThumbUpIcon/>{x.views}K</span> <br />
                    {/* <DeleteIcon/> */}
                    {/* <button onClick={()=>{editvid(x.id)}}>Edit</button> */}
                    {/* <button onClick={()=>{remove(x.id,x.title)}}>Delete</button> */}
                    <EditIcon onClick={()=>{editvid(x.id)}}></EditIcon>
                    <DeleteIcon onClick={()=>{remove(x.id,x.title)}}></DeleteIcon>
                </div>
                )
            })}
     </div>
    );
};
export default AdminView;