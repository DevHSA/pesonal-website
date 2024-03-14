import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import Publications from './pages/Publications';
import Activities from './pages/Activities';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="container">
        <div className='nav'>
          <ul className="nav-links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/publications'>Publications</Link></li>
            <li><Link to='/activities'>Activities</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </div>
        
        <div className='body'>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/publications' element={<Publications/>} />
          <Route path='/activities' element={<Activities/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
        </div>

        <div className='footer'>
          <p>&copy; Copyright 2024 Harish S A. Last updated: March 10th, 2024</p>
        </div>
      </div>
    </Router>
  );
}

export default App;