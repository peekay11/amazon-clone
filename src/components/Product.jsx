import React from "react";
import "./css/Product.css";
import { useStateValue } from "../StateProvider";
import { Toaster, toast } from 'sonner';

function Product({ id, title, image, price, rating, description }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        description: description,
      },
    });
    toast.success('Added to cart!', {
      style: { background: '#00cc66', color: 'white' },
      icon: '🛒',
      description: title
    });
  };

  return (
    <div className="product">
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
      <div className="product_info">
        <p className="product_title">{title}</p>
        <p className="product_description">{description}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array.from({ length: rating }, (_, i) => (
            <p key={i}>⭐</p>
          ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
