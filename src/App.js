import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Loginbootstrap from './login/Loginbootstrap';
import Signup from './login/signup';
import Sidebar from './home/Sidebar';
import Home from './home/Home';
import About from './home/About';
import MenuBar from './MenuBar';
import  CustomContextMenu  from './CustomContextMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginbootstrap />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Sidebar />} />
        {/* <Route path="/home1" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/menu" element={<MenuBar />} />
        <Route path="/context" element={<CustomContextMenu />} />




      </Routes>
    </Router>
  );
}

export default App;
