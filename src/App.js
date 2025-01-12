import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/footer";
import SkillList from "./components/Skills";
// import info from "./components/info";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <info /> */}
      <About />
      <SkillList/>
      <Projects />
      <Footer/>
    </div>
  );
};

export default App;
