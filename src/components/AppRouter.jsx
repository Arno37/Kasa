import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Apartments from '../pages/Apartments';
import Error404 from '../pages/Error404';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/apartments' element={<Apartments />} />
        <Route path='/error404' element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
