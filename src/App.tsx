import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import { Home } from './paginas/home/Home';
import { About } from './paginas/about/About'
import LabelBottomNavigation from './componentes/estaticos/footer/Footer';
import Footer from './componentes/estaticos/footer/Footer';

function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
    </Routes>
      <Footer />
  </Router>
  );
}

export default App;
