import '@Styles/main.scss'
import './app.scss'
import Header from '../Components/header/Header.jsx'
import Homepage from '../Components/Homepage/Homepage.jsx'
import Footer from '../Components/footer/footer.jsx'
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'


function App() { 
  return (
    <div className='main-container'>
      <BrowserRouter >
        <Header />
        <Link to="/login">hsdfgh</Link>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<h1>Hello</h1>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
