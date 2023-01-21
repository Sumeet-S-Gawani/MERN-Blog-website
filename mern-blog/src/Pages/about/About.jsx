import React from "react";
import "./About.css";
import myProfile  from  '../../blogImages/myProfile.jpg';


const About = () => {
  return (
    <div className="about">
        <span className="aboutTitle">ABOUT ME</span>
      <div className="aboutItem">
        <img
          className=""
          src={myProfile}
          alt="profile"
        />
        <p>
        My name is Sumeet S Gawani, and I work as a Full-Stack Web Developer. In 2020, I started my development career. I started out by learning the fundamentals of C and Python, and then worked my way up to web programming. I then started enhancing my web development skills by studying topics such as (HTML, CSS, JS, React, Node, Express, MongoDB, REST API, and a few CSS and JS frameworks). To better comprehend the DSA principles, I also studied the fundamentals of Java programming. I'm now ready to tackle a new challenges in my coding career. So please feel free to get in touch.
        </p>
      </div>

      <span className="aboutTitle">SOCIALS</span>
      <div className="aboutItem">
        <div className="aboutSocial">
        <i className="aboutIcons fa-brands fa-square-github"></i>
        <i className="aboutIcons fa-brands fa-square-twitter"></i>
        <i className="aboutIcons fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default About;
