import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import EducationInternship from "./sections/EducationInternship";
import Home from "./sections/Home";
import Projects from "./sections/Projects";

function App() {
  return (
    <div>
        <Header/>
        <Home/>
        <About/>
        <EducationInternship/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
