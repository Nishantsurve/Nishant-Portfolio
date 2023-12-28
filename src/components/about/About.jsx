import React from 'react'
import "./about.scss";
import {motion} from 'framer-motion';
const About = () => {
  return (
    <div className="about">

    <div className="main-title">
        <h2>About <span>me</span><span className="bg-text">My stats</span></h2>
    </div>
<div className="wrapper">
    <div className="about-container">
        <div className="left-about">
        <motion.h4 color="orange" >About <span>Me</span></motion.h4>
                <p>I am Nishant surve aspiring to become an Software Engineer. I have specialized in Web Development (React,Node.js,Express.js) and familiar with Cross platform development Flutter
                    and Proficient in Data Structure and Algorithms, 3* LeetCode. 
                </p>
                <motion.button className="btn2" whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>
       Resume/CV
       </motion.button>
        </div>
        <div className="right-about">
            
            <div className="about-item">
                <div className="abt-text">
                    <p className="large-text">3+</p>
                    <p className="small-text">Projects<br/>Completed</p>
                </div>
            </div>
            

            <div className="about-item">
                <div className="abt-text">
                    <p className="large-text">700+ Problems</p>
                    <p className="small-text">Data Structure &<br/>Algorithms</p>
                </div>
            </div>

     

           
        </div>
    </div>

    </div>
    <div className="about-stats">
        <h2 className="stat-title">My <span>Skills</span></h2>
        <div className="progress-bars">

        <div className="progress-bar">
            <p className="prog-title">C++</p>
            <div className="progress-con">
                <p className="prog text">85%</p>
                <div className="progress">
                    <span className="C"> </span>
                </div>
            </div>
        </div>
        <div className="progress-bar">
            <p className="prog-title">React</p>
            <div className="progress-con">
                <p className="prog text">70%</p>
                <div className="progress">
                    <span className="React"> </span>
                </div>
            </div>
        </div>
        <div className="progress-bar">
            <p className="prog-title">JavaScript</p>
            <div className="progress-con">
                <p className="prog text">75%</p>
                <div className="progress">
                    <span className="js"> </span>
                </div>
            </div>
        </div>
        <div className="progress-bar">
            <p className="prog-title">Node.js</p>
            <div className="progress-con">
                <p className="prog text">70%</p>
                <div className="progress">
                    <span className="Node"> </span>
                </div>
            </div>
        </div>
        <div className="progress-bar">
            <p className="prog-title">MongoDB</p>
            <div className="progress-con">
                <p className="prog text">50%</p>
                <div className="progress">
                    <span className="Mongodb"> </span>
                </div>
            </div>
        </div>
        <div className="progress-bar">
            <p className="prog-title">Django</p>
            <div className="progress-con">
                <p className="prog text">40%</p>
                <div className="progress">
                    <span className="Django"> </span>
                </div>
            </div>
        </div>
        
       

        </div>
    </div>

</div>

  )
}

export default About