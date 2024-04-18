import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/AdminEdit.css"
const AdminEdit = () => {
  let [title, settitle] = useState("")
  let [description, setdescription] = useState("")
  let [videourl, setvideourl] = useState("")
  let [likes, setlikes] = useState("")
  let [views, setviews] = useState("")
  let param = useParams();

  useEffect(() => {
    axios.get(`http://localhost:1000/video/${param.id}`)
      .then((res) => {
        console.log(res.data);
        settitle(res.data.title)
        setdescription(res.data.description)
        setviews(res.data.views)
        setlikes(res.data.likes)
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);
  let data = { title, description, views, videourl, likes }
  let submitedit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:1000/video/${param.id}`, data)
      .then((res) => {
        alert("Data edited succefully")
      })
      .catch((err) => {
        alert("Invalid data")
      })
  };

  return (
    <div className="adminedit">
      <form action="" onSubmit={submitedit}>

        <label htmlFor="">
          Title: <input value={title} onChange={(e) => (settitle(e.target.value))} required type="text" placeholder="Enter the video name" />
        </label>
        <br />
        <label htmlFor="">
          Description :<textarea placeholder="Enter the description about the video" cols="30" rows="10" value={description} onChange={(e) => (setdescription(e.target.value))}></textarea>
        </label>
        <br />
        <label htmlFor="">
          VideoUrl: <input value={videourl} onChange={(e) => (setvideourl(e.target.value))} type="text" placeholder="Enter the video details" />
        </label>
        <label htmlFor="">
          Likes: <input value={likes} onChange={(e) => (setlikes(e.target.value))} required type="number" />
        </label>
        <br />
        <label htmlFor="">
          Views: <input value={views} onChange={(e) => (setviews(e.target.value))} required type="number" />
        </label>
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AdminEdit;