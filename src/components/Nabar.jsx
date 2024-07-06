import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GiFoodTruck } from "react-icons/gi";
import { auth } from './Firebase';
import { signOut } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useState("home");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (location.pathname === '/login' || location.pathname === '/signup') {
          navigate('/');
        }
      } else {
        if (location.pathname !== '/login' && location.pathname !== '/signup') {
          navigate('/login');
        }
      }
    });

    return () => unsubscribe();
  }, [navigate, location]);

  async function logout() {
    try {
      await signOut(auth);
      navigate('/login');
      toast.success('Logout successfully!', {
        
        autoClose: 3000, // Close the notification after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      toast.err('Error', {
        
        autoClose: 3000, // Close the notification after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  return (
    <>


    <ToastContainer />
    <nav className="navbar">
      <div className='logo'>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <GiFoodTruck className='icons' />
          <span style={{ color: 'tomato' }} className='left'>Food</span>
          <span style={{ color: 'red' }} className='right'>Cart</span>
        </Link>
      </div>
      
      <div className='Homepage'>
        <Link to='/' className='home'>Home</Link>
        <Link to='/review'><p>Reviews</p></Link>
        <Link to='/cart'>
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
      <div>
      <Link to='/AI' className='home'>
        <p>ASK AI</p>
      </Link>
      </div>
      <div>
        {auth.currentUser ? (
          <div>
            {auth.currentUser.email}
            <button onClick={logout}>Logout</button>
          </div>
        ) : ""}
      </div>
      <div className='login-sing'>
        {!auth.currentUser && (
          <>
            <Link to='/signup'>
              <button className='sign-up'>SignUp</button>
            </Link>
            <Link to='/login'>
              <button>Login</button>
            </Link>
          </>
        )}
      </div>
    </nav>
    </>
  );
}

export default Navbar;
