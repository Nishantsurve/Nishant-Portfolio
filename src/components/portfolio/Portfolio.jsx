import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items=[

  {
      id:1,
      title:"Freelance App",
      link:"https://github.com/Nishantsurve/Freelance-App",
      img:"https://images.pexels.com/photos/5598293/pexels-photo-5598293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc:"• Designed an online platform where users can add services together with a projected cost and delivery date.• Enabled users to record past transactions and add reviews on services, increasing user engagement by 60%. • Added features like a built-in Stripe payment gateway and a price filter for services. <br> • Linked the frontend and backend using Axios capabilities, and used JWT for authentication."
  },

  {
      id:2,
      title:"Gemini AI",
      link:"https://github.com/Nishantsurve/Generative-AI-app",
      img:"https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc:"• Build a Gen AI chatbot that answers user prompts, achieving a 95% accuracy rate in generating responses. • Utilize React.js to create an interactive and responsive user interface for the chatbot. • Implemented PHP to handle requests and responses between the frontend and the Gemini API with Axios,resulting in a 30% reduction in response time. • Leveraged MySQL database to store user prompts, and chatbot responses to maintain chat history."
  },
 
  {
      id:3,
      title:"Code Editor",
      link:"https://github.com/Nishantsurve/Code_Editor",
      img:"https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc:`• Build a real-time collaborative editor using the React for interactive UI, increasing user efficiency 50%.
  ${'\n'} • Developed a real-time synchronization system with Socket.io, reducing latency for seamless collaboration.
`
  },

  {
      id:4,
      title:"OpenAi Image",
      link:"https://github.com/Nishantsurve/Openai_image_generator",
      img:"https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc:"• Developed a web application in which users can generate images by entering the prompts, Utilized the OPENAI API to Generate images according to size as Small,Medium and Large."
  },

  {
      id:5,
      title:"Disney clone",
      link:"https://github.com/Nishantsurve/Disney-UI-Clone",
      img:"https://www.glitched.online/wp-content/uploads/2022/03/Disney_Logo.jpeg",
      desc:"• Developed a visually stunning and user-friendly Disney+ clone responsive UI by using React,Utilized the TMDB API to retrieve and showcase a diverse range of content dynamically."
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
            <motion.button
            whileHover={{ scale: 0.9 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            ><a href={item.link}>See Demo</a></motion.button>
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
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
