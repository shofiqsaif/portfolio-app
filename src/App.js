import './App.css';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <WorkExperience />
        <Education />
        <Projects />
        <Skills />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
