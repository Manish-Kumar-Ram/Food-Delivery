import React, { useState, useContext, useEffect } from 'react';
import './Cart.css'; // Ensure correct path to your CSS file
import { FaTrash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../components/Firebase';
import { storeContext } from '../../context/StoreContext';


function Cart() {
  const { gettoalcartAmpunt, food_list, cartitems, removerfromcart, setDiscount } = useContext(storeContext);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscountState] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate('/login');
    }
  }, [navigate]);

  const handleApplyCoupon = () => {
    if (couponCode === 'SAVE10') {
      setDiscountState(0.1); // 10% discount
      setDiscount(0.1); // Update discount in context
    } else {
      alert('Invalid coupon code');
    }
  };

  const totalAmount = gettoalcartAmpunt();
  const deliveryFee = totalAmount === 0 ? 0 : 2;
  const discountAmount = totalAmount * discount;
  const finalTotal = totalAmount - discountAmount + deliveryFee;

  const handleProceedToCheckout = () => {
    if (auth.currentUser) {
      navigate('/order');
    } else {
      alert('Please log in to proceed to checkout.');
      navigate('/login');
    }
  };

  return (
    <>
      <div className='cart'>
        <div className='cart-items'>
          <div className='cart-items-title'>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartitems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className='cart-items-title cart-items-item'>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartitems[item._id]}</p>
                    <p>${item.price * cartitems[item._id]}</p>
                    <p onClick={() => removerfromcart(item._id)} className='cross'><FaTrash /></p>
                  </div>
                  <hr />
                </div>
              );
            }
            return null; // Added to fix missing return statement error
          })}
        </div>
        <div className='cart-bottom'>
          <div className='carts-totals'>
            <h2>Cart Total</h2>
            <div>
              <div className='total-details'>
                <p>SubTotal</p>
                <p>${totalAmount}</p>
              </div>
              <hr />
              {discount > 0 && (
                <>
                  <div className='total-details'>
                    <p>Discount</p>
                    <p>-${discountAmount.toFixed(2)}</p>
                  </div>
                  <hr />
                </>
              )}
              <div className='total-details'>
                <p>Delivery Fee</p>
                <p>${deliveryFee}</p>
              </div>
              <hr />
              <div className='total-details'>
                <b>Total</b>
                <b>${finalTotal.toFixed(2)}</b>
              </div>
              <button onClick={handleProceedToCheckout}>Proceed To Checkout</button>
            </div>
            <div className='cart-code'>
              <div>
                <p>Only Copon code Here SAVE10</p>
                <div className='cart-code-input'>
                  <input
                    type='text'
                    placeholder='Coupon code'
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button className='copon-btn' onClick={handleApplyCoupon}>Add Coupon Code</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Cart;
