import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
  const PF = "http://localhost:5000/images/";
  return (
    <div className='post'>
      {post.photo && (
      <img src={PF + post.photo} alt="music" className="postImg" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map(c => (
              <span className="postCat">{c.name}</span>
            ))
          }
        </div>
          <Link className='link' to={`/post/${post._id}`}><span className="postTitle">{post.title}</span></Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <p className="postDiscription">
          {post.description}
        </p>
      </div>
    </div>
  )
}

export default Post;