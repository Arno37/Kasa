import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header/Header.jsx';
import Homepage from './pages/HomePage/HomePage.jsx';
/*import LogementPage from './pages/LogementPage/LogementPage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Footer from './layout/Footer/Footer.jsx';
import MainContent from './layout/MainContent/MainContent.jsx';*/

const App = () => {
  return (
    <Router>
      <Header />
     
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      
      
    </Router>
  );
}
export default App;
