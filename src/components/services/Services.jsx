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
          whileHover={{ background: "lightgray", color: "black" }}
          
        >
          <img src="/front-end-programming.png" alt="" />
          <h2>FrontEnd Development</h2>
          <p>
          I am front-end developer with experience in building responsive,animated and optimized sites.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          
        >
          <img src="/backend.png" alt="" />
          <h2>BackendDevelopment</h2>
          <p>
          I have good understanding of Node.js,Express.js,Python for handling datastorage, processing, and retrieval.
          </p>
         
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="/icons8-flutter-48.png" alt="" />
          <h2>Flutter Development</h2>
          <p>
          I have specialize in utilizing the Flutter framework to create cross-platform mobile applications for both Android and iOS platforms 
          </p>
          
        </motion.div>
       
      </motion.div>
    </motion.div>
  );
};

export default Services;
