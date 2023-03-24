import React from 'react';
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    // <Router>
    <HashRouter>
      <Navigation />
      <div className="content-wrapper">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter> 
    // </Router>
  );
}
export default App;

