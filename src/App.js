import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Layout from './Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Notfound from './Notfound/Notfound';
import Portfolio from './Portfolio/Portfolio'


let routes = createBrowserRouter([
  { path: "" , element: <Layout/> ,children: [
    {index: true , element: <Home/>} ,
    { path: 'about' ,element: <About /> },
    { path: 'contact' ,element: <Contact /> },
    { path: 'portfolio' ,element: <Portfolio /> },
    { path: "*" , element: < Notfound/> }
  
  ]},
 
])
function App() {
  
  return <>
   <RouterProvider router={routes}></RouterProvider>
  
  </>
  
}

export default App;
