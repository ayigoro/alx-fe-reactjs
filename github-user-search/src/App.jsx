import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path= "/about"  element = {<About/>}/>
        <Route path= "/contact"  element = {<Contact/>}/>                               
      </Routes>
    </Router>
  )
}

export default App