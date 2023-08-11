import React from 'react'
import { Link } from 'react-router-dom'
Link
const Product = (props) => {

let game = props.game
  


  return (
    <div>
              <img className='product-img' src={game.Poster} alt="game" width="350" height="250" />
              <h3 className='product-title'>{game.Title}</h3>     <Link to={`/pages/ProductPage?id=${game.imdbID}`}><button className='product-btn'>Visa mer</button></Link>
              <br />
              {/* <i>{game.description}</i> */}
              <h5>Pris: 100 SEK</h5>
    </div>
  )
}

export default Product