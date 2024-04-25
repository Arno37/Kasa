import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


import Home from './pages/Home'
import Header from './components/Header/Header'



function App() {
return (
<BrowserRouter>
<Header />
  <main>
    <Routes>
      <Route path='/' element={<About />} />
      <Route path="/appartement" element={<Appartment />} />
      <Route path="/oups" element={<Error04 />} />
      <Route path="/accueil" element={<Home />} />
    </Routes>
  </main>
  <Footer />
  </BrowserRouter>
  )
}

export default App;