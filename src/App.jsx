
import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import Products from './pages/Products';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Cart from './components/Cart'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState('');
  const [carResponse, setCarResponse] = useState("")
  const [showCart, setShowCart] = useState(false);

  const getCars = async () => {
  try {

    const response =  await fetch(
      `https://product-api-production-0e9a.up.railway.app/products`
    );
   const carApi= await response.json();
   
    setCarResponse(carApi)
    
  } catch (error) {
    console.log(error);
    setError("An error occurred while fetching the data");
  }
};



useEffect(() => {
  getCars();
}, []);

const handleBuy = (car) => {
  setCartItems([...cartItems, car]);
}
console.log(cartItems)

const handleShowCart = () => {
  setShowCart(!showCart);
}

  return (
    <div className="App">
      <Header onCartClick={handleShowCart} cartItems={cartItems}/>
      <Products carResponse = {carResponse} handleBuy = {handleBuy}/>
      <Nav cartItems={cartItems} />
      {showCart && <Cart cartItems={cartItems} />}
      <Footer />
    </div>
  )
  }

export default App
