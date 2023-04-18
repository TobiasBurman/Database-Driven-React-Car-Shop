
import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import Products from './pages/Products';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Cart from './components/Cart'


function App() {

  return (
    <div className="App">
      <Products/>
    </div>
  )
  }

export default App
