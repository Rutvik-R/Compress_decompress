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
        <Route exact path='/' element={<Home />} ></Route>
        <Route exact path='/compress' element={<Compress />} ></Route>
        <Route exact path='/decompress' element={<Decompress />} ></Route>
        {/*<Route exact path='/test' element={<UploadFiles />} ></Route>*/}
      </Routes>
    </Router>
  )
}

export default App
