
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
function App() {
  
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
    <Navbar setShowLogin={setShowLogin}></Navbar>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/cart'  element={<Cart/>}/>
      <Route path='/order'  element={<PlaceOrder/>}/>
    </Routes>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
