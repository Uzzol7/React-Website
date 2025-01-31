import React from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/cart'
import PlaceOrder from './pages/Placeorder/Placeorder'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        < Route path='/' element= {<Home/>} />
        < Route path='/Cart' element= {<Cart/>} />
        < Route path ='/PlaceOrder' element ={<PlaceOrder/>}/>


      </Routes>
      
    </div>
  )
}

export default App
