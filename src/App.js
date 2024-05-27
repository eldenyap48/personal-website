import NavBar from './components/NavBar.js';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Fun from './pages/Fun';
import Projects from './pages/Projects'
import { AnimatePresence } from 'framer-motion';
import React from 'react';

function App() {

  const location = useLocation();

  return (
    <div className='flex flex-col h-screen'>

      <NavBar/>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/experience" element={<Experience />}/>
          <Route exact path="/fun" element={<Fun />}/>
        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;