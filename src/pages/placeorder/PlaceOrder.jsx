import React, { useContext } from 'react'
import { storeContext } from '../../context/StoreContext'
import './Place.css';
import { useNavigate } from 'react-router-dom';
import Payment from '../../components/Payment';
function PlaceOrder() {
  const{gettoalcartAmpunt,discount}=useContext(storeContext)
  const totalAmount = gettoalcartAmpunt();
  const deliveryFee = totalAmount === 0 ? 0 : 2;
  const discountAmount = totalAmount * discount;
  const finalTotal = totalAmount - discountAmount + deliveryFee;
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate('/payment');
  };
  return (
    <>
<form className='place-order'>
 <div className='palce-order-left'>
<p className='title'>Delivery Information</p>
 <div className='multi-fileds'>
  <input type='text' placeholder='First Name' />
  <input type='text' placeholder='Last name' />
 </div>
 <input type='email' placeholder='Email adress ' />
 <input type='text' placeholder='Enter your Stret ' />
 <div className='multi-fileds'>
  <input type='text' placeholder='City' />
  <input type='text' placeholder='State' />
 </div>
 <div className='multi-fileds'>
  <input type='text' placeholder='landmark' />
  <input type='text' placeholder='phone' />
 </div>
 <input type='text' placeholder='' />

 </div>

 <div className='place-order-right'>
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
              <button  onClick={handleProceedToPayment}> <Payment/></button>
            </div>
            </div>
            </div>
</form>

    </>
  )
}

export default PlaceOrder