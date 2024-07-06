import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { storeContext } from '../context/StoreContext';
function Fooditem({id,name,price,description,image}) {

const{cartitems,
    setcartitems,addtocart,removerfromcart}=useContext(storeContext);

    return (
    <div className='fooditem'>
    <div className='food-item-img'>
        <img className='food-item-images' src={image} alt='' />
{
    !cartitems[id] ? <img className='add' onClick={()=> addtocart(id)} src={assets.add_icon_white} alt='' />
    : <div className='food-item-counter'>
    <img onClick={()=> removerfromcart(id)} src={assets.remove_icon_red} alt='' />
    <p>{cartitems[id]}</p>
    <img onClick={()=> addtocart(id)} src={assets.add_icon_green} />
     </div>
}
    </div>
    <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts} alt='' />
        </div>
        <p className='food-item-description'>{description}</p>
        <p className='food-item-price'> ${price}</p>

    </div>
    </div>
  )
}

export default Fooditem