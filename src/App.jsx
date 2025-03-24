import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import dogHead from "/Astra_vector.svg"


function App() {

  return (
    <div className='app'>
      <div className='background'>
      <header>
        <h1 className='astragram-home-header'>ASTRAGRAM</h1>
      </header>
      <Router>
        <Routes>
          <Route path='/Astragram' element={<HomePage/>}></Route>
        </Routes>
      </Router>
      </div>
    </div>
    
  )
}

export default App
