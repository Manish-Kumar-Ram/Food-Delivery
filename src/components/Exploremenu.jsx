import React, { useRef, useState } from 'react';
import { food_list, menu_list } from '../assets/assets';
 // Ensure correct path to CSS file
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
function Exploremenu({category,setcatogery,setFilteredFoods}) {
  const scrollRef = useRef(null);
 const[result,setresult]=useState(food_list) 
 const[foods,setfoods]=useState(food_list)
 function handleChange(e) {
  let value = e.currentTarget.value.toLowerCase();
  console.log(value);
  let filteredObject = foods.filter((item) => {
    return (
      item.name.toLowerCase().includes(value) ||
      item.category.toLowerCase().includes(value) ||
      item.description.toLowerCase().includes(value) ||
      item.price.toString().toLowerCase().includes(value)
    );
  });
  setFilteredFoods(filteredObject);
}
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <h1 className='explore-menu'>What would you like to order</h1>
      
      <div className="search-bar">
      <CiSearch className="search-icon" />
      <input onChange={handleChange} className='input' type='text' placeholder='Search...' />

    </div>
      <div className='scroll-container'>
        <button className='scroll-button left' onClick={scrollLeft}>
        <FaArrowLeftLong />
        </button>
        <button className='scroll-button right' onClick={scrollRight}>
        <FaArrowRightLong />
        </button>
        <div className='exploremenu-list' ref={scrollRef}>
          {menu_list.map((item, index) => (
            <div onClick={()=> setcatogery(prev=> prev===item.menu_name?"All":item.menu_name)} className='menu-item' key={index}>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='Image not available' />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      
      
      </div>
      <hr/>
    </div>
  );
}

export default Exploremenu;
