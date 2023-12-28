import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {

  const items =[
    'Contact',
  ]

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>NISHANT SURVE</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer & Problem Solver
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
            {items.map( item =>(
            <motion.a href={`#${item}`} key={item} 
              >{item}</motion.a>
             ))}
            </motion.button>
            <motion.button className="btn1" variants={textVariants} whileHover={{scale:1.1}}><a href="https://drive.google.com/file/d/1oIlmaPF7Oe1IKZN2UaP3f_POJs_AQLba/view?usp=sharing">Resume</a></motion.button>
            <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
          </motion.div>
          
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Dev & Exploring Web 3.0  
      </motion.div>
      <div className="imageContainer">
        <img src="/Portfolio_image.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
