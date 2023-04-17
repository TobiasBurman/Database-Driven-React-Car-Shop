import React from 'react'

const Product = (props) => {

let car = props.car
  


  return (
    <div>
      <p>{car.title}</p>
              <p>{car.description}</p>
              <p>{car.price}</p>
              <p>{car.date}</p>
              <p>{car.category}</p>
              <p><img src={car.image} alt="car" width="350" height="250" /></p>
    </div>
  )
}

export default Product