import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './components/Home'
import Compress from './components/Compress'
import Decompress from './components/Decompress'
import Test from './components/Test'
// import UploadFiles from './components/FileUpload'

function App() {

  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Home />} ></Route>
        <Route  path='/compress' element={<Compress />} ></Route>
        <Route  path='/decompress' element={<Decompress />} ></Route>
        <Route  path='/test' element={<Test />} ></Route>
      </Routes>
    </Router>
  )
}

export default App
