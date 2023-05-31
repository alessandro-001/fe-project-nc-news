import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import ArticlesList from './components/ArticlesList'
import ArticleCard from './components/ArticleCard'
import CommentSection from './components/CommentSection'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


/* APP */
function App() {

  return (
  <BrowserRouter>
    <main className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/articlesList' element={<ArticlesList />} />
        <Route path='/articles/:article_id' element={<ArticleCard />} />
        <Route path='/articles/:article_id/comments' element={<CommentSection />} />
      </Routes>
    </main>
  </BrowserRouter>
  )
}

export default App;
