import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Shop from './component/Shop'
import Product from './component/Product'
import Cart from './component/Cart'
import Checkout from './component/Checkout'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
