import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Maze Game",
    img: "/mazegamess.png",
    desc: "This maze game features an algorithm that automatically generates a unique maze with every page load. Working on this project solidified my understanding of core vanilla JavaScript concepts and demonstrated the versatility of JavaScript in creating dynamic applications. In the future, I plan to enhance the game by adding a popup menu at the initial page load, allowing players to select the maze difficulty with a simple click. This difficulty selection will adjust the grid dimensions used to create the maze, providing a customizable challenge for the players.",
    link: "https://denniswellsmazegame.netlify.app/",
  },
  {
    id: 2,
    title: "Decoder Ring",
    img: "/DecoderRingss.png",
    desc: "This project involved working on complex algorithms and unit testing with Mocha and Chai. Its purpose is to allow users to encode or decode messages using one of three methods: Caesar’s shift, the Polybius square, or the substitution cipher. In Caesar’s shift, the program shifts letters down or up the alphabet by a specified amount to encode or decode messages, respectively. The Polybius square method translates letters into numbers or vice versa based on their positions within a two-dimensional chart. Lastly, the substitution cipher exchanges letters from the English alphabet with those provided by the user, resulting in encoded or decoded messages. This project provided an opportunity to explore encryption techniques and enhance skills in algorithmic problem-solving and testing methodologies.",
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
    desc: "This React application enables users to share their thoughts on products by leaving comments and ratings out of 10. It's been a great learning experience - not only did I deepen my understanding of state and hooks, but I also discovered the significance of the context API in larger-scale projects. Structuring React projects became clearer as I delved into this app, reinforcing key concepts like props, state, form handling, lists, and keys. The project underscored the importance of organization, and I found that utilizing the context API greatly simplifies data management compared to passing props throughout the entire project tree.",
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






