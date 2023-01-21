import React, { useContext, useState } from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';
import { Context } from '../../content api/Context';
import myProfile  from  '../../blogImages/userIcon.png';



const Topbar = () => {

  const { user, dispatch } = useContext(Context);
  const [srcData, setSrcData] = useState('');
  const PF = "http://localhost:5000/images/";


  const onSearch = (event) => {
    setSrcData(event.target.value)
  }

  const searchValue = () => {
    let newValue = srcData.toLowerCase();
    if(srcData !== ''){
      setSrcData(newValue);
      console.log(newValue);
    }
    const srcInput = document.getElementById('searchInput');
    srcInput.value = '';
    srcInput.classList.remove('openSearchInput');
    
  }

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  }

  return (
    <div className='top'>

      <div className="topLeft">
        <i className="topIcons fa-brands fa-square-github" title='Github'></i>
        <i className="topIcons fa-brands fa-square-twitter" title='Twitter'></i>
        <i className="topIcons fa-brands fa-square-instagram" title='Instagram'></i>
      </div>

      <div className="topCenter">
        <ul className="topNav">
          <li className='topListItem'><Link className='link' to="/">HOME</Link></li>
          <li className='topListItem'><Link className='link' to="/about">ABOUT</Link></li>
          <li className='topListItem'><Link className='link' to="/contact">CONTACT</Link></li>
          <li className='topListItem'><Link className='link' to="/write">WRITE</Link></li>
          <li className='topListItem' onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>

      <div className="topRight">
        { 
        user ? <><Link className='link' to="/settings"><img src={user?.profilePic !== "" ? PF + user?.profilePic : myProfile} className='topImg' alt="profile" title='Settings'/></Link><input type="search" name="search" id="searchInput" className='topSearchInput' value={srcData} onChange={onSearch} placeholder='Search here...' autoComplete='off'autoFocus={true}/>
        <i className="topSearch fa-solid fa-magnifying-glass" id='search' onMouseEnter={() => document.getElementById('searchInput').classList.add('openSearchInput')} onClick={searchValue}></i></>
        : 
        <ul className="topNav">
          <li className='topListItem'><Link className='link' to="/login">LOGIN</Link></li>
          <li className='topListItem'><Link className='link' to="/register">REGISTER</Link></li>
        </ul>
        }
         
        
      </div>

    </div>
  )


}

export default Topbar;