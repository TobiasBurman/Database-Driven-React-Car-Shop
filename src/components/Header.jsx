import React from 'react'
import Nav from './Nav'
import Cart from './Cart'

const Header = (cartItems) => {
  return (
    <>
    
     <Nav />
     <Cart cartItems={cartItems}/>

    </>
  )
}

export default Header