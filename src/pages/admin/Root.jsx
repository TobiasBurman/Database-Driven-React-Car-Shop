
import { useState, useEffect } from 'react'


import { Outlet } from 'react-router-dom'
import Header from '../../components/Header';
import Products from '../Products';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';



const Root = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState('');

  const [showCart, setShowCart] = useState(false);

  const handleRemoveItem = (id) => {
    const newCartItems = cartItems.filter(item => item._id !== id);
    setCartItems(newCartItems);
  };


console.log(cartItems)

const handleShowCart = () => {
  setShowCart(!showCart);
}


  return (
    <div>
      
      <Header onCartClick={handleShowCart} cartItems={cartItems} handleRemoveItem={handleRemoveItem}/>
      
   
      {showCart && <Cart onRemoveItem={handleRemoveItem} cartItems={cartItems} />}
        <section>
            <Outlet context={[cartItems, setCartItems]}/>
        </section>
        <Footer />
    </div>
  )
}

export default Root