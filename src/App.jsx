import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
  <BrowserRouter>
    <main className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} /> 
        
      </Routes>
    </main>
  </BrowserRouter>
  )
}

export default App;
