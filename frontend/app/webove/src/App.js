import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import UpravyVylepsenia from './pages/UpravyVylepsenia';
import './style.css';


function App() {
  return (
    <Router>
       <div className="app">
     <div className="background"></div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/upravy_vylepsenia" element={<UpravyVylepsenia />} />
        </Routes>
        <Footer /> 
        </div>
    </Router>
  );
}

export default App;

