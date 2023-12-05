import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Navigation from './pages/Navigation';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Baseball from './pages/sports/mens/Baseball';
import Volleyball from './pages/sports/womens/Volleyball';
import Mens_BB from './pages/sports/mens/Basketball';
import Mens_CC from './pages/sports/mens/CC';
import Football from './pages/sports/mens/Football';
import Mens_Golf from './pages/sports/mens/Golf';
import Mens_Soccer from './pages/sports/mens/Soccer';
import Mens_SwimDive from './pages/sports/mens/SwimDive';
import Mens_Tennis from './pages/sports/mens/Tennis';
import Mens_TF from './pages/sports/mens/TF';
import Womens_BB from './pages/sports/womens/Basketball';
import Womens_CC from './pages/sports/womens/CC';
import Womens_Golf from './pages/sports/womens/Golf';
import Womens_Soccer from './pages/sports/womens/Soccer';
import Softball from './pages/sports/womens/Softball';
import Womens_SwimDive from './pages/sports/womens/SwimDive';
import Womens_Tennis from './pages/sports/womens/Tennis';
import Womens_TF from './pages/sports/womens/TF';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tos" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/sports/baseball" element={<Baseball />} />
            <Route path="/sports/softball" element={<Softball />} />
            <Route path="/sports/football" element={<Football />} />
            <Route path="/sports/mens-basketball" element={<Mens_BB />} />
            <Route path="/sports/mens-cc" element={<Mens_CC />} />
            <Route path="/sports/mens-soccer" element={<Mens_Soccer />} />
            <Route path="/sports/mens-swim-dive" element={<Mens_SwimDive />} />
            <Route path="/sports/mens-tennis" element={<Mens_Tennis />} />
            <Route path="/sports/mens-golf" element={<Mens_Golf />} />
            <Route path="/sports/mens-tf" element={<Mens_TF />} />
            <Route path="/sports/volleyball" element={<Volleyball />} />
            <Route path="/sports/womens-basketball" element={<Womens_BB />} />
            <Route path="/sports/womens-cc" element={<Womens_CC />} />
            <Route path="/sports/womens-golf" element={<Womens_Golf />} />
            <Route path="/sports/womens-soccer" element={<Womens_Soccer />} />
            <Route path="/sports/womens-swim-dive" element={<Womens_SwimDive />} />
            <Route path="/sports/womens-tennis" element={<Womens_Tennis />} />
            <Route path="/sports/womens-tf" element={<Womens_TF/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
