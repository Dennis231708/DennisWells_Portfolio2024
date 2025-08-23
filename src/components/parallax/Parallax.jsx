import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #111132, #0c0c1d)"
      }}
    >
      <motion.div className="content">
        <motion.h1 id="WhatIKnow" style={{ y: yText }}>
          What I Know
        </motion.h1>
        <motion.span className="skills">
          <img src="/icons/html.png" alt="HTML" />
          <img src="/icons/css.png" alt="CSS" />
          <img src="/icons/js.png" alt="JavaScript" />
          <img src="/icons/react.png" alt="React" />
          <img src="/icons/ReactNative.png" alt="React Native" />
          <img src="/icons/redux.png" alt="Redux" />
          <img src="/icons/chai.svg" alt="Chai" />
          <img src="/icons/express.png" alt="Express.js" />
          <img src="/icons/framer.png" alt="Framer" />
          <img src="/icons/github3.svg" alt="GitHub" />
          <img src="/icons/jquery.webp" alt="jQuery" />
          <img src="/icons/mocha.svg" alt="Mocha" />
          <img src="/icons/node-js.png" alt="Node.js" />
          <img src="/icons/node-sass.svg" alt="Node-sass" />
          <img src="/icons/postger.png" alt="PostgreSQL" />
          <img src="/icons/visual-studio-code.svg" alt="Visual Studio Code" />
          <img src="/icons/shopify-logo.svg" alt="Shopify" />
          <img src="/icons/wordpress-icon.svg" alt="Wordpress" />
        </motion.span>
      </motion.div>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;


