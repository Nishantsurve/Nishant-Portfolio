import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id:1,
    title:"Disney clone",
    img:"https://www.glitched.online/wp-content/uploads/2022/03/Disney_Logo.jpeg",
    desc:"• Developed a visually stunning and user-friendly Disney+ clone responsive UI by using React,Utilized the TMDB API to retrieve and showcase a diverse range of content dynamically."
},

{
    id:2,
    title:"Code Editor",
    img:"https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc:`Build a real-time collaborative Editor using the React framework forinteractive UI, Build a real-time sync feature forthe code using the Socket.io ${"   "}Utilized the CodeMirror Library for styling of the code-editor.`
},

{
    id:3,
    title:"OpenAi Image",
    img:"https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc:"Developed a web application in which users can generate images by entering the prompts, Utilized the OPENAI API to Generate images according to size as Small,Medium and Large."
},

{
    id:4,
    title:"Email Sender",
    img:"https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg",
    desc:"Build an Email sender backend application using HTML,CSS,Javascript user can send email to receiver"
},
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href="https://github.com/Nishantsurve">Go</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
