import React from 'react';
import "./css/Checkout.css";
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from '../components/Subtotal';
const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img 
          src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  
          alt="Checkout Ad" 
          className="checkout_ad" 
        />
        <div>
          <h3>Hello, {user ? user.email : "Guest"}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {/* Checkout Products */}
          {basket.length > 0 ? (
            basket.map((item) => (
              <CheckoutProduct 
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p>Your basket is empty. Start shopping now! 🛒</p>
          )}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  ); 
}

export default Checkout;
