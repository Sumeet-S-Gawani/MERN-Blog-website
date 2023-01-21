import React, { useContext, useEffect, useState } from 'react';
import './SinglePost.css';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../content api/Context';

const SinglePost = () => {
  const location =  useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const {user} = useContext(Context);
  const [title, setTitle ] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + path, {data : {username : user.username}})
      window.location.replace("/")
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = async () => {
    try {
      await axios.put("/posts/" + path, 
      {username : user.username, title, description});
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title)
      setDescription(res.data.description);
    }
    getPost()
  }, [path]);

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && 
        <img src={PF + post.photo} alt="nature" className="singlePostImg" />
        }
        { updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus  onChange={(e) => setTitle(e.target.value)}/> : (

          <h1 className="singlePostTitle">
            {title}
              {post.username === user?.username &&
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i> 
                <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                </div>
              }
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <Link className='link' to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        
        {updateMode ? <textarea value={description} className="singlePostDescInput" rows="5" onChange={(e) => setDescription(e.target.value)} ></textarea> : (
          <p className="singlePostDesc">
          {description}
          </p>
        )}
      { updateMode && <button onClick={handleUpdate} className="updateBtn">UPDATE</button>}
      </div>
    </div>
  )
}

export default SinglePost;