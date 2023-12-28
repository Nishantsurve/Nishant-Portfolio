import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nishant Surve
        </motion.span>
        <div className="social">
          <a href="https://github.com/Nishansurve">
            <img src="/Github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/nishant-surve-148973214/">
            <img src="/LinkedIN.png" alt="" />
          </a>
          <a href="https://www.instagram.com/nishantsurve57?igshid=YTQwZjQ0NmI0OA==">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://twitter.com/NishantS208">
            <img src="/Twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
