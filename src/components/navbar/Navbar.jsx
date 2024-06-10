import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Dennis Wells Portfolio
        </motion.span>
        <div className="social">
          <a href="https://github.com/Dennis231708" target="_blank">
            <img src="/icons/github3.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/denniswellsdev/" target="_blank">
            <img src="/icons/linkedin.webp" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
