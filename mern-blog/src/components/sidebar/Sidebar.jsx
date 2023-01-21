import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import myProfile  from  '../../blogImages/myProfile.jpg';
import axios from "axios";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    }
    getCat();
  }, [])
  
  
  return (
    <div className="sidebar">
        <span className="sidebarTitle">ABOUT ME</span>
      <div className="sidebarItem">
        <img
          className=""
          src={myProfile}
          alt="profile"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          eveniet, pariatur neque aliquam exercitationem dolore. Consequuntur.
        </p>
      </div>
        {/* <span className="sidebarTitle">CATEGORIES</span> */}
      <div className="sidebarItem">
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem" key={c._id} ><Link className='link' to={`/?cat=${c.name}`} >{c.name}</Link></li>
              
          ))}
        </ul>
      </div>

      <span className="sidebarTitle">SOCIALS</span>
      <div className="sidebarItem">
        <div className="sidebarSocial">
        <i className="sidebarIcons fa-brands fa-square-github"></i>
        <i className="sidebarIcons fa-brands fa-square-twitter"></i>
        <i className="sidebarIcons fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
