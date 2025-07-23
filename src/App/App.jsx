import '@Styles/main.scss'
import './app.scss'
import Header from '../Components/header/Header.jsx'
import Homepage from '../Components/Homepage/Homepage.jsx'
import Footer from '../Components/footer/footer.jsx'


function App() { 
  return (
    <div className='main-container'>
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
