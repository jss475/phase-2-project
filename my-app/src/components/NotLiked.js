import React from 'react'
import RestaurantTile from './RestaurantTile';

function NotLiked({allRestaurants}){
    //if statement based off of true/false on logged in or not

    const restuarantArray = allRestaurants.map(res => {
        return <RestaurantTile key={res.id} res={res} />
      })
    
      return (
          <>
            <h2>Check These Out!</h2>
            {restuarantArray}
          </>
        );
}

export default NotLiked