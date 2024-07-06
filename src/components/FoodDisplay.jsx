import React, { useContext } from 'react'
import { storeContext } from '../context/StoreContext'
import Fooditem from './Fooditem'

function FoodDisplay({category,filteredFoods}) {
    const {food_list}=useContext(storeContext)
  return (
    <div className='food-display'>
        <h2>Our Best Disesh Near You</h2>
<div className='food-diplay-list'>
{filteredFoods.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <Fooditem 
                key={index} 
                id={item._id} 
                name={item.name} 
                description={item.description} 
                price={item.price} 
                image={item.image} 
              />
            );
          }
          return null;
        })}
</div>
    </div>
  )
}

export default FoodDisplay