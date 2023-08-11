import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";
import Product from '../components/Product';
const Products = () => {

  const [gameItems, setgameItems] = useOutletContext(); // hook för game
  const [gameResponse, setGameResponse] = useState("")  // hook för bil API
  const [error, setError] = useState('');   // hook för error

  // anropar APIet
  const getGames = async () => {
    try {
  
      const response =  await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=21adb06f&s=batman&type=game`
      );
     const gameApi= await response.json();
     
      setGameResponse(gameApi.Search)
      console.log(gameApi)
    } catch (error) {
      console.log(error);
      setError("An error occurred while fetching the data");
    }
  };
  
  
  useEffect(() => {
    getGames();
  }, []);


  // uppdaterar gameen vid köp
  const handleBuy = (game) => {
    setgameItems([...gameItems, game]);
  }
 
   
  return (
    <div className='product-container'>
      {gameResponse.length
        ? gameResponse.map((game) => (
          <div className ="product"key={game.imdbID }>
              <Product game = {game}/>
              <br />
              <button onClick={() => handleBuy(game)}>Köp</button>
              </div>
          ))
        : "List is empty"}
    </div>
  );
};
 

export default Products;