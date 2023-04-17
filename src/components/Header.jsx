import React, { useState } from 'react';
import Nav from './Nav';
import Cart from './Cart';

const Header = ({ cartItems, onCartClick }) => {
  const [showCart, setShowCart] = useState(false);
  
  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Nav onCartClick={handleCartClick} />
      {showCart && <Cart cartItems={cartItems} />}
    </>
  );
};

export default Header;
