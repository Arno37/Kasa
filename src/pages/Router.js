import Home from '../pages/Home'
import About from '../pages/About'
import Root from './pages/Root'
import ErrorPage from '../pages/Error404'
import Logement from '../pages/Appartments'

import {
    createBrowserRouter,
  } from "react-router-dom";

const router = createBrowserRouter([
  
    {
      path: "/",
      element: <Root />,
    
      children: [{
        path: "/",
        element: <Home/>,
      },
     ]
    }
]);

export default router;