import {useState } from "react";
import axios from "axios";
import  '../Styles/Addvideo.css'
const Addvideo=()=>{
    let [title,settitle] = useState("")
    let [description,setdescription] = useState("")
    let [VideoUrl,setvideoUrl] = useState("")
    let [likes,setlikes] = useState("")
    let [views,setviews] = useState("")
    let data={title,description,views,likes,VideoUrl}

    let addvideo=()=>{
        axios.post("http://localhost:1000/video",data)
        .then((res)=>{
            console.log(res);
            alert("Added the Video successfully")
        })
        .catch((err)=>{
            console.log(err);
            alert("Invalid Data Format")
        })
    }
     
return(
    <div className="addvideo">
        <form onSubmit={addvideo} action="">
            <label htmlFor="">
               Title: <input  value={title}   onChange={(e)=>(settitle(e.target.value))} required type="text"   placeholder="Enter the video name"/>
            </label>
            <br />
            <label htmlFor="">
                Description :<textarea placeholder="Enter the description about the video" cols="30" rows="10" value={description} onChange={(e)=>(setdescription(e.target.value))}></textarea>
            </label>
            <br />
            <label htmlFor="">
                VideoUrl: <input value={VideoUrl} onChange={(e)=>(setvideoUrl(e.target.value))}type="text" placeholder="Enter the video details"/>
            </label>
            <label htmlFor="">
                Likes: <input value={likes} onChange={(e)=>(setlikes(e.target.value))}required type="number" />
            </label>
            <br />
            <label htmlFor="">
                Views: <input value={views} onChange={(e)=>(setviews(e.target.value))} required type="number" />
            </label>
            <br />
            <button>Add video</button>
        </form>
    </div>
)
}
export default Addvideo;