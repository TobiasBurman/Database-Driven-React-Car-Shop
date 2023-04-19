import React from 'react'

const Product = (props) => {

let car = props.car
  


  return (
    <div>
      <h3>{car.title}</h3>
              <h5>Beskrivning: {car.description}</h5>
              <h5>{car.price}</h5>
              <p>{car.date}</p>
              <p>{car.category}</p>
              <p><img className='product-img' src={car.image} alt="car" width="350" height="250" /></p>
    </div>
  )
}

export default Product