import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Context } from '../../content api/Context';
import './WritePage.css';

const WritePage = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);

  const handlePublish = async (e) => {
      e.preventDefault()
      const newPost = {
        username : user.username,
        title,
        description,
      }

      if(file){
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name",filename);
        data.append("file",file);
        newPost.photo = filename;
        try {
          await axios.post("/upload", data)
        } catch (error) {
          console.log(error);
        }
      }
      try {
        const res = await axios.post("/posts", newPost);
        window.location.replace("/post/" + res.data._id);
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <div className='writePage'>
      <span className="writepageTitle">
        Write your thought's
      </span>
      {file && 
        <img className='writepageImg' src={URL.createObjectURL(file)} alt="smaple"/>
      }
      <form action="#" className="writePageForm" onSubmit={handlePublish}>
        <div className="writePageFormGroup center">
          <label htmlFor="fileInput" title='Upload Image'>
          <i className="writePageIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display: 'none'}} onChange={e=> setFile(e.target.files[0])} />
          <input type="text" id="FileTitle" placeholder='Title' className='writePageInput' autoFocus={true} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="writePageFormGroup">
          <textarea type='text' placeholder='Tell your story...' className='writePageInput writePageText' onChange={e => setDescription(e.target.value)}></textarea>
        </div>
      <button className="writePageSubmit" type='submit'>PUBLISH</button>
      </form>
    </div>
  )
}

export default WritePage;