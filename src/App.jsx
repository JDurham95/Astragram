import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'



function App() {

  const backgroundStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage: "url(../dog_head.png)",
    backgroundSize: "150px 150px",
    backgroundRepeat: "repeat",
    animation: "panBackground 15s linear infinite",
    
  };

  return (
    <div className='app'>
      <div style={backgroundStyle}>
      <header>
        <h1 className='astragram-home-header'>ASTRAGRAM</h1>
      </header>
      <Router>
        <Routes>
          <Route path='/Astragram/' element={<HomePage/>}></Route>
        </Routes>
      </Router>
      </div>
    </div>
    
  )
}

export default App
