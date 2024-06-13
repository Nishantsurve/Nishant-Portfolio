import React from 'react';
import "./about.scss";
import {motion} from 'framer-motion';
import CircularProgress from '@mui/joy/CircularProgress';


const PDF_FILE_URL='http://localhost:5173/Nishant_Surve_CV.pdf';

const About = () => {

    const downloadFileAtURL=(url) =>{
        const fileName=url.split("/").pop()
         const aTag = document.createElement("a");
         aTag.href=url;
         aTag.setAttribute("download",fileName)
         document.body.appendChild(aTag);
         aTag.click();
         aTag.remove();
      };
    

  return (

    <div className="about">

        <div className="main-title">
            <h2>About <span>me</span><span className="bg-text">My stats</span></h2>
        </div>
<div className="wrapper">
        <div className="about-container">
            <div className="left-about">
            <motion.h4 color="orange">About <span>Me</span></motion.h4>
                    <p>
                    I am Nishant Surve, a dedicated and resilient individual aspiring to become a Software Developer,focused on solving problems and creating innovative solutions. With a specialization in Full Stack Development,I have honed my problem-solving skills by tackling over 750+ challenges on platforms like LeetCode and Codechef.Demostrated good communication skill as Core Team member of Google Developer Students Club.
                    </p>
                    <motion.button className="btn2" whileHover={{ scale: 1.1 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
              onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>
           Resume
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
                        <p className="large-text">750+ Problems</p>
                        <p className="small-text">Data Structure &<br/>Algorithms</p>
                    </div>
                </div>

         

               
            </div>
        </div>

        </div>
        <div className="about-stats">
            <h5 className="stat-title">My Skills</h5>

            <div className="progress-bars">

            <CircularProgress sx={{ '--CircularProgress-size': '80px', '--CircularProgress-progressColor': 'orange', }}  determinate value={84.67}>C++</CircularProgress>
            <CircularProgress sx={{ '--CircularProgress-size': '80px', '--CircularProgress-progressColor': 'orange', }}  determinate value={76.67}>Js</CircularProgress>
            <CircularProgress sx={{ '--CircularProgress-size': '80px', '--CircularProgress-progressColor': 'orange', }}  determinate value={66.67}>React</CircularProgress>
            <CircularProgress sx={{ '--CircularProgress-size': '80px', '--CircularProgress-progressColor': 'orange', }}  determinate value={66.67}>Node.js</CircularProgress>
            <CircularProgress sx={{ '--CircularProgress-size': '80px', '--CircularProgress-progressColor': 'orange', }}  determinate value={60.67}>Express</CircularProgress>
         <CircularProgress sx={{ '--CircularProgress-size': '80px', '--CircularProgress-progressColor': 'orange', }}  determinate value={59.67}>SQL</CircularProgress>
         <CircularProgress sx={{ '--CircularProgress-size': '80px', '--CircularProgress-progressColor': 'orange', }}  determinate value={55.67}>MongoDB</CircularProgress>
        

            </div>
        </div>

    </div>

  )
}

export default About;