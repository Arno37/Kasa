import Home from '../src/pages/Home/'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Error404 from '../src/pages/Error404/'
import About from '../src/pages/About'
import Appartments from '../src/pages/Appartments'


const router = BrowserRouter([

{
  path:"/",
  element: <Home/>
}


])

export default router