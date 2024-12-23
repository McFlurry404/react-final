import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import WeaponInfo from './pages/WeaponInfo';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Aside />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/weapon/:id" element={<WeaponInfo />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

