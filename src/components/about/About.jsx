import React from 'react';
import "./about.scss";
import {motion} from 'framer-motion';

const PDF_FILE_URL='http://localhost:5173/Nishantsurve_Resume.pdf';

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
  
  <> 
    
    
 <section className="About1">
    <div className="about">

        <div className="main-title">
            <h2>About <span>me</span><span className="bg-text">My stats</span></h2>
        </div>

        <div className="about-container">
            <div className="left-about">
            <motion.h4 color="orange" >About Me</motion.h4>
                    <p>
                    I'm Nishant Surve, a passionate and self-resilient person aspiring to become a Software Developer with an aim to solve problems and designing solutions.<br></br>

My interests includes Backend development , Cloud Computing and familiar with Cross platform development as Flutter Framework<br></br>
I am an enthusiastic DSA problem solver and solved problems across platform such as LeetCode, Codechef, Codestudio
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


        <div className="about-stats">
            <h5 className="stat-title">My Skills</h5>
            <div className="progress-bars">

            <div className="progress-bar">
                <p className="prog-title">C++</p>
                <div className="progress-con">
                    <p className="prog text">80%</p>
                    <div className="progress">
                        <span className="html"> </span>
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <p className="prog-title">CSS</p>
                <div className="progress-con">
                    <p className="prog text">80%</p>
                    <div className="progress">
                        <span className="css"> </span>
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <p className="prog-title">JS</p>
                <div className="progress-con">
                    <p className="prog text">80%</p>
                    <div className="progress">
                        <span className="js"> </span>
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <p className="prog-title">Python</p>
                <div className="progress-con">
                    <p className="prog text">80%</p>
                    <div className="progress">
                        <span className="python"> </span>
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <p className="prog-title">Java</p>
                <div className="progress-con">
                    <p className="prog text">70%</p>
                    <div className="progress">
                        <span className="java"> </span>
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <p className="prog-title">Docker</p>
                <div className="progress-con">
                    <p className="prog text">40%</p>
                    <div className="progress">
                        <span className="Docker"> </span>
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <p className="prog-title">React</p>
                <div className="progress-con">
                    <p className="prog text">80%</p>
                    <div className="progress">
                        <span className="react"> </span>
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <p className="prog-title">Node</p>
                <div className="progress-con">
                    <p className="prog text">80%</p>
                    <div className="progress">
                        <span className="node"> </span>
                    </div>
                </div>
            </div>

            </div>
        </div>

    </div>
    </section>



    </>
  )
}

export default About;