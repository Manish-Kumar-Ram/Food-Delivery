import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
// Import the CSS file

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div>
          <p>Company</p>
          <Link to='#'>About us</Link>
          <Link to='#'>Team</Link>
          <Link to='#'>Careers</Link>
          <Link to='#'>Blog</Link>
        </div>
        <div>
          <p>Legal</p>
          <Link to='#'>Terms & Conditions</Link>
          <Link to='#'>Refund & Cancellation</Link>
          <Link to='#'>Privacy Policy</Link>
          <Link to='#'>Cookie Policy</Link>
        </div>
        <div className='social-links'>
          <p>Follow us</p>
          <span><FaFacebookF /></span>
          <span><FaInstagram /></span>
          <span><FaTwitter /></span>
          <p>Receive exclusive offers in your mailbox</p>
          <input placeholder='Enter Your Email' /> 
          <button>Subscribe</button>
        </div>
      </div>
      <hr style={{marginTop:'10px'}} />
      <p style={{textAlign:'center'}}>All rights reserved &copy; FoodCart</p>
    </footer>
  );
}

export default Footer;
