import React from 'react';
import './Homepage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Exploremenu from './Exploremenu';
import img1 from './food1.jpeg'; // Assuming food1.jpeg is in the same folder as Home.js
import img2 from './Food2.jpeg'; // Assuming food1.jpeg is in the same folder as Home.js
import img3 from './Food3.jpeg'; // Assuming food1.jpeg is in the same folder as Home.js
import FoodDisplay from './FoodDisplay';
import { useState } from 'react';
import Footer from './Footer';
import { food_list } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
function Home() {
  const[category,setcatogery]=useState('All');
  const [filteredFoods, setFilteredFoods] = useState(food_list);
  const navigate=useNavigate();
  useEffect(()=>{
      if(auth.currentUser==null){
    navigate('/login')
      }
  },[])
  async function logout(){
  try{

     await signOut(auth)
     navigate('/login')
     toast.success('Logout successfully!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Close the notification after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
  catch(err){
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000, // Close the notification after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  }
  return (
    <>
     
   
      <div className='homepage'>
        <div className='home-content'>
          <h1>Best Food Delivery 
            <br></br>
            in Your Home
          </h1>
          <p>Easy. Fast Reliable</p>
          <p>Order Your Food any time anywhere We will Deliver Them to you Dorstep Quick</p>
          <Link>
            <button className='view-menu'>View Menu</button>
          </Link>
        </div>
        <div className="video-container">
          <video className="video" loop autoPlay muted src='Preparing Order 2.mp4'></video>
          <div className="play-button"></div>
        </div>
        
      </div>   
      <div className='order-image'>
  <h1 style={{ textAlign: 'center' }}>Order in Three Steps</h1>
  <div className="image-row">
    <img src={img1} alt="Food" />
    <img src={img2} alt="Food" />
    <img src={img3} alt="Food" />
  </div>
</div>

      <Exploremenu category={category} setFilteredFoods={setFilteredFoods} setcatogery={setcatogery}></Exploremenu>
      <FoodDisplay filteredFoods={filteredFoods} category={category} setcatogery={setcatogery} ></FoodDisplay>
    
    </>
  )
}

export default Home;
