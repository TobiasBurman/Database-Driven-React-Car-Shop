
import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');
  const [carResponse, setCarResponse] = useState("")
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



  return (
    <div className="App">
      <Header />
      <Products carResponse = {carResponse}/>
        
      <Footer />
    </div>
  )
  }

export default App
