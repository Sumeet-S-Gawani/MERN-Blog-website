import React, { useContext } from 'react';
import './Settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from '../../content api/Context';
import myProfile  from  '../../blogImages/userIcon.png';
import { useState } from 'react';
import axios from 'axios';


const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:5000/images/";


  const handleUpdated = async (e) => {
    e.preventDefault();
    dispatch({type: "UPDATE_START"});
    const updatedUser = {
      userId : user._id,
      username,
      email,
      password,
    }
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      updatedUser.profilePic = filename;
      
      try {
        await axios.post("/upload", data)
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({type: "UPDATE_SUCCESS" , payload : res.data});
    } catch (error) {
      console.log(error);
      dispatch({type: "UPDATE_FAILED"});
    }
}

const handleDelete = async () => {
  try {
    await axios.delete("/users/" + user._id, {data : {userId : user._id, username : user.username}})
    dispatch({type: "LOGOUT"});
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className='settings'>
    <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsUpdateTitle">Update Your Account</span>
        <span className="settingsDeleteTitle" onClick={handleDelete}>Delete Your Account</span>
      </div>
      <form action="#" className="settingsForm" onSubmit={handleUpdated}>
        <label>Profile Picture</label>
        <div className="settingsPP">
          <img src={ file ? URL.createObjectURL(file) : user?.profilePic !== "" ? PF + user?.profilePic : myProfile} alt="PP" />
          <label htmlFor="fileInputPic">
          <i className="settingsPPIcon fa-regular fa-circle-user"></i>
          </label>
          <input type="file" id="fileInputPic" style={{display : "none"}} onChange={e=> setFile(e.target.files[0])}/>
        </div>
        <label>Username</label>
          <input type="text" id="userName" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} disabled/>
          <label>Email</label>
          <input type="email" id="userEmail" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
          <label>New Password</label>
          <input type="password" id="userPassword" onChange={(e) => setPassword(e.target.value)}/>
          <button className="settingsSubmit" type='submit'>Update</button>
          {success && (
            <span className='settingsUpdate'>Profile updated succefully...</span>
          )}
      </form>
    </div>  
    <Sidebar />
    </div>
  )
}

export default Settings;