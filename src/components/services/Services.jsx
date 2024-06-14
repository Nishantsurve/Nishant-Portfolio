import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >



      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b  whileHover={{color:"orange"}}>Creating smarter faster </motion.b><span>Solutions</span>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> <span>Business.</span>
          </h1>
         
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{scale:0.9}}
          
        >
          <img src="/front-end-programming.png" alt="" />
          <motion.h2>FrontEnd Development</motion.h2>
          <p>
          I am front-end developer with experience in building responsive,animated and optimized sites using frameworks like React,Next.js,TailwindCSS,framer-motion libraries.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{scale:0.9}}
          
        >
          <img src="/backend.png" alt="" />
          <motion.h2>Backend Development</motion.h2>
          <p>
          I am proficient in developing REST-APIs using Node.js and Express.js, as well as working with databases such as MySQL and MongoDB for storing, manipulating, and retrieving data.Skilled in building efficient server-side applications and real-time communication systems using Socket.IO
          </p>
         
        </motion.div>
        <motion.div
          className="box"
          whileHover={{scale:0.9}}
        >
          
          <motion.h2>Full Stack Development</motion.h2>
          <p>
          Full stack developer with experience in JavaScript frameworks like React for the front end, and Node.js with Express.js for the backend. Proficient in SQL and MongoDB databases, and experienced in creating responsive web applications. Skilled in integrating real-time features using Socket.IO
          </p>
          
        </motion.div>
       
      </motion.div>
    </motion.div>
  );
};

export default Services;
