import React from "react";
import "./css/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";
import { Toaster, toast } from 'sonner';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id,
        });
        toast.error('Removed from cart', {
            style: { background: '#ff4d4d', color: 'white' },
            icon: '🗑️',
            description: title
        });
    };

    return (
        <div className="checkoutProduct">
            <Toaster 
                richColors 
                position="bottom-right"
                toastOptions={{
                    style: {
                        borderRadius: '8px',
                        padding: '16px',
                        fontSize: '14px',
                        fontWeight: '500'
                    }
                }}
            />
            <img src={image} alt={title} className="checkoutProduct_image" />
            <div className="checkoutProduct_info">
                <h3 className="checkoutProduct_title">{title}</h3>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {[...Array(rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                    ))}
                </div>
                <p>Basket Count: {basket.length}</p>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
