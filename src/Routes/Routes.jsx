import { Home } from '../pages/Home'
import { Appartment } from '../pages/Appartment'
import { About } from '../pages/About'
import { Error404 } from '../pages/Error404'

import { Routes, Route } from "react-router-dom"

export function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Appartment/:id" element={<Appartment />}/>
            <Route path="/about" element={<About />}/>
            <Route path="*" element={<Error404 />}/>
        </Routes>
  )
}