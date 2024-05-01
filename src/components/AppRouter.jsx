import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Apartments from '../pages/Apartments';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/apartments' element={<Apartments />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
