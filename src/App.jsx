import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import ArticlesList from './components/ArticlesList'
import ArticleCard from './components/ArticleCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { UserContext } from './contexts/userContext'
import Topics from './components/Topics' 
import ArticlesByTopic from './components/ArticlesByTopic'

/* APP */

function App() {
  const [user, setUser] = useState({ 
    username: "grumpy19",
    avatar_url: 'https://thumbs.dreamstime.com/b/avatar-pop-art-retro-icon-vector-illustration-style-background-166861453.jpg'
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <main className='App'>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/articlesList' element={<ArticlesList />} />
            <Route path='/topics' element={<Topics />} /> 
            <Route path='/articles/:article_id' element={<ArticleCard user={user} />} />
            <Route path="/topics/:topic" element={<ArticlesByTopic />} />
          </Routes>
        </main>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
