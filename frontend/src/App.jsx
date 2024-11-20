import { BiAbacus } from "react-icons/bi"; 
import '/App.css'
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/features";
import Contact from "./pages/contact";
import Register from "./Register";
import Login from "./Login";



export default function App() {
  return (
    <div className='divtag'>

      <Navbar/>
      <Routes>
        <Route path="/home" elements={<Home/>}/>
        <Route path="/about" elements={<About/>}/>
        <Route path="/features" elements={<Features/>}/>
        <Route path="/contact" elements={<Contact/>}/>
        <Route path="/Register" elements={<Register/>}/>
        <Route path="/Login" elements={<Login/>}/>
      </Routes>
      
      <Footer />
      </div>

      
    //   import React from 'react'
      
    //   const App = () => {
    //     return (
    //       <div>
            
    //       </div>
    //     )
    //   }
      
    //   export default App
      
    // </div>
  
  )
}
 