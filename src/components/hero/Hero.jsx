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
      duration: 25,
    },
  },
};


const PDF_FILE_URL='http://localhost:5173/Nishant_Surve_CV.pdf';

const Hero = () => {

  const items=[
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
            Full Stack developer & Problem Solver
          </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            
            <motion.button whileHover={{ scale: 1.2 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
              >
              
              {items.map( item =>(
            <motion.a href={`#${item}`} key={item}>
              {item}
            </motion.a>
             ))}

            </motion.button>

            <motion.button className="btn2" whileHover={{ scale: 1.2 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
              onClick={()=>{ window.location.href = 'https://drive.google.com/file/d/1W1_lIYVfFNOmP37cyuK3Bu8lrZjK8_we/view?usp=sharing';}}
             
              >
           Resume
           </motion.button>
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
        Creating Solutions that makes an impact.
      </motion.div>
      <motion.div   className="imageContainer">
        <motion.img src="images/Portfolio_image.jpg" alt=""  
    />
      </motion.div>
    </div>
  );
};

export default Hero;