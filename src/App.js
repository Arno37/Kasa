import Home from './pages/Home'



import { createBrowserRouter } from 'react-router-dom';
function App() {
return (
<BrowserRouter>
<Header />
  <main>
    <Routes>
     
      <Route path="/accueil" element={<Home />} />
    </Routes>
  </main>
  <Footer />
  </BrowserRouter>
  )
}

export default App;