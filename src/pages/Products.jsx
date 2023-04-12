import React from 'react'

const Products = (props) => {
  
    console.log(props.carResponse)
  return (
    <div >
      {props.carResponse.length
        ? props.carResponse.map((car) => (
            <div key={car._id }>
              <p>{car._id}</p>
            </div>
          ))
        : "Movie List is empty"}

        
    </div>
  );
};
 

export default Products;