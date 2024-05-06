import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header'
import Home from '../pages/Home/Home';
import About from '../pages/About';
import Apartments from '../pages/Apartments';
import Error404 from '../pages/Error404';
import Footer from './Footer';



function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/apartments' element={<Apartments />} />
        <Route path='/error404' element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;