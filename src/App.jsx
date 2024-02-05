import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AllTopicsPage from './pages/AllTopicsPage'

function App() {

  return (

    <div className="App">
      <h1>My App </h1>

      <header>
        < Header />
      </header>

      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/topics" element={< AllTopicsPage />} />
        <Route path="/" element={< HomePage />} />
        <Route path="/" element={< HomePage />} />
        <Route path="/" element={< HomePage />} />
      </Routes>
    </div>
  )
}

export default App
