import React from 'react';
import './Header.css';
import headerImg  from  '../../blogImages/headerImg.jpeg';

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>Personal</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
       className='headerImg'
       src={headerImg}  alt="header figure" />
    </div>
  )
}

export default Header;