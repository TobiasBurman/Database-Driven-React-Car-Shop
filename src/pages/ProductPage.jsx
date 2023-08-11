import React from 'react'
import { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";

const ProductPage = () => {
  const [gameItems, setGametItems] = useOutletContext(); // hook för cart
  const [gameResponse, setGameResponse] = useState("") // hook för bil API
  let urlParams = new URLSearchParams(window.location.search)


    // hämtar bil efter specifikt id
  const getGames = async () => {
    try {
      const response =  await fetch(
        `https://www.omdbapi.com/?apikey=b726c748&i=${urlParams.get('imdbID')}`
      );
     const gameApi= await response.json();
     
      setGameResponse(gameApi)
      console.log(urlParams.get('imdbID'))
      console.log('enskild')
      console.log(gameResponse)
    } catch (error) {
      console.log(error);
      setError("An error occurred while fetching the data");
    }
  };
  
  useEffect(() => {
    getGames();
  }, []);
  
    // uppdaterar carten vid köp
  const handleBuy = (game) => {
    setCartItems([...cartItems, game]);
  }

  return (
    <div className='productPage'>

      <div key={gameResponse.imdbID } >
              <p><img src={gameResponse.Poster} alt="gameResponse" width="350" height="250" /></p>
              <b>{gameResponse.Title}</b>
              <br/>
              <i>{gameResponse.Year}</i>
              <br/>
              <br/>
              <i> <b>Actors: </b> {gameResponse.Actors}</i>
              <br/>
              <i> <b>Writers: </b>{gameResponse.Writer}</i>
              <br/>
              <i> <b>Language: </b>{gameResponse.Language}</i>
              <p>Pris: 100kr </p>
              
              <br />
              <button onClick={() => handleBuy(gameResponse)}>Köp</button>
              </div>
    </div>
  )
}

export default ProductPage