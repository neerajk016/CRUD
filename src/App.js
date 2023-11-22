import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Edit from "./components/Edit"
import './App.css';


function App() {
  return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/edit" element={<Edit/>}/>
          </Routes>
      </Router>
  )
}

export default App

