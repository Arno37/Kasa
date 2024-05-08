import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Apartments from '../pages/Apartments'
import Error404 from '../pages/Error404'

function appRouter ({header}) {
return(
    <Router>
        {header}
        <main>
            <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="*" element={<Error404 />} />
            </Routes>
        </main>
    </Router>
)
}
export default appRouter