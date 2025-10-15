// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Container } from 'react-bootstrap';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navigation />
      <Container className="mt-4">
        <Header />
        
        <section id="about" data-aos="fade-up">
          <About />
        </section>

        <section id="experience" data-aos="fade-left">
          <Experience />
        </section>
        <section id="projects" data-aos="fade-right">
          <Projects />
        </section>

        <section id="skills" data-aos="fade-left">
          <Skills />
        </section>
        <section id="achievements" data-aos="fade-right">
          <Achievements />
        </section>
        <section id="education" data-aos="fade-left">
          <Education />
        </section>
        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>

        <section id="footer" data-aos="fade-up">
          <Footer />
        </section>
      </Container>
    </>
  );
}

export default App;
