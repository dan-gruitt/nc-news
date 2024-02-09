import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import SingleArticlePage from './pages/SingleArticlePage'
import SearchBar from './components/SearchBar'
import AllArticlesPage from './pages/AllArticlesPage'
import SingleTopicPage from './pages/SingleTopicPage'


function App() {

  return (

    <div className="App">

      <header className='header'>
        < Header />
        < SearchBar />
      </header>

      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/:article_id" element={< SingleArticlePage />} />
        <Route path="/articles" element={< AllArticlesPage />} />
        <Route path="/topics/:topics" element={<SingleTopicPage />} />
      </Routes>
    </div>
  )
}

export default App
