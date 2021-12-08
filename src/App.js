import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Home from './pages';
import About from './pages/About';
import Menu from './pages/Menu';
import Dropdown from './components/Dropdown';
import Contact from './pages/Contact';


function App() {
  const [isOpen, setIsOpen]=useState(false);

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  useEffect(()=>{
    const hideMenu=()=>{
      if(window.innerWidth>768 && isOpen){
        setIsOpen(false);
        console.log("Bit amk");
      }
    };
    window.addEventListener('resize', hideMenu)

    return()=>{
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home/>} />
        <Route path='/About' caseSensitive={false} element={<About/>} />
        <Route path='/Menu' caseSensitive={false} element={<Menu/>} />
        <Route path='/Contact' caseSensitive={false} element={<Contact/>} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
