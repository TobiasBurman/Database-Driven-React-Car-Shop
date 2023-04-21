import React from 'react'
import { Link } from 'react-router-dom'
Link
const Product = (props) => {

let car = props.car
  


  return (
    <div>
              <img className='product-img' src={car.image} alt="car" width="350" height="250" />
              <h3 className='product-title'>{car.title}</h3>     <Link to={`/pages/ProductPage?id=${car._id}`}><button className='product-btn'>Visa mer</button></Link>
              <br />
              <i>{car.description}</i>
              <h5>Pris: {car.price} SEK</h5>
    </div>
  )
}

export default Product