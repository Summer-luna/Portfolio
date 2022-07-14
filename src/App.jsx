import React from "react";
import Header from './components/Header';
import Introduction from "./components/Inroduction";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return(
    <div className="container text-montserrat">
      <Header />
      <Introduction />
      <Skill />
      <Projects />
      <Aboutme />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;