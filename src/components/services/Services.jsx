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
        <motion.p  >
          I focus on helping your brand grow
          <br /> and move forward
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b  whileHover={{color:"orange"}}><span>Unique</span></motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b   whileHover={{color:"orange"}}><span>For Your</span></motion.b> Business.
          </h1>
          
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{scale:0.9}}
        >
          <motion.h2 >Web Development</motion.h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam 
          </p>
         
        </motion.div>
  
        <motion.div
          className="box"
          whileHover={{scale:0.9}}
         
        >
          <motion.h2 >Web scrapping</motion.h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            
          </p>
       
        </motion.div>
        <motion.div
          className="box"
          whileHover={{scale:0.9}}
        >
          <motion.h2 >Flutter Development</motion.h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur 
          </p>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;