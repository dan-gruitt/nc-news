import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AllTopicsPage from './pages/AllTopicsPage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (

    <div className="App">

      <header className='header'>
        < Header />
      </header>

      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/topics" element={< AllTopicsPage />} />
      </Routes>
    </div>
  )
}

export default App
