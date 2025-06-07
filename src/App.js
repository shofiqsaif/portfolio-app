import "./App.css";
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
// import Achievements from "./components/Achievements";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Shofiqul Islam";
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <WorkExperience />
        <Education />
        <Projects />
        {/* <Achievements /> */}
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
