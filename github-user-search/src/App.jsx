import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'




const App = () => {
  return (
    <BrowserRouter>
    <Router>
      <Home/>
      <About/>
      <Contact/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path= "/about"  element = {<About/>}/>
        <Route path= "/contact"  element = {<Contact/>}/>                               
      </Routes>
    </Router>
    </BrowserRouter>
  )
}

export default App