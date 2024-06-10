import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Maze Game",
    img: "/mazegamess.png",
    desc: "This maze game showcases an algorithm that generates a new maze each time the page loads. It strengthened my grasp of fundamental vanilla JavaScript concepts and highlighted JavaScript's versatility in dynamic app creation. I aim to improve the game by adding a popup menu for players to select maze difficulty, adjusting grid dimensions for a customizable challenge.",
    link: "https://denniswellsmazegame.netlify.app/",
  },
  {
    id: 2,
    title: "Decoder Ring",
    img: "/DecoderRingss.png",
    desc: "This project involved developing complex algorithms, using Mocha and Chai for unit testing. It enables users to encode or decode messages using three methods: Caesar’s shift, the Polybius square, or substitution cipher. Caesar’s shift moves letters up or down the alphabet, Polybius square translates letters into numbers, and substitution cipher exchanges letters with user-provided ones. It offered an opportunity to explore encryption techniques and improve algorithmic problem-solving and testing skills.",
    link: "https://dwdecoderring.netlify.app/",
  },
  {
    id: 3,
    title: "Movie VS Movie",
    img: "/dwMovieAppss.png",
    desc: "This project lets you search for and compare two movies using data from the IMDb API. The app checks out a bunch of stuff like how many Oscars each movie won, their Rotten Tomatoes and Meta scores, and even their IMDb ratings and votes. It was a real eye-opener for me, teaching me loads about how we can grab info from APIs and how JavaScript helps us do cool stuff online.",
    link: "https://dwmovieapp.netlify.app/",
  },
  {
    id: 4,
    title: "Feedback App",
    img: "/feedbackuiss.png",
    desc: "This React app lets users share thoughts on products through comments and ratings. It was a valuable learning experience, deepening my grasp of state, hooks, and the context API's role in larger projects. Structuring React apps became clearer as I explored this project, reinforcing concepts like props, state, form handling, lists, and keys. Using the context API simplified data management, highlighting the importance of organization over prop passing across the project tree.",
    link: "https://dwfeedbackui.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="PortfolioPage">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.link && (
              <button>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              </button>
            )}
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






