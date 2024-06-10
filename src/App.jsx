import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <span id="Portfolio">
        <Portfolio />
      </span>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
