import React from 'react';
import "./css/Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { Toaster, toast } from 'sonner';

function Subtotal() {
    const navigate = useNavigate();
    const [{ basket, user }] = useStateValue();
    const total = getBasketTotal(basket);

    const handlePayment = () => {
        if (!user) {
            toast.error('Please login first', {
                style: { background: '#ff4d4d', color: 'white' },
                icon: '🔒',
                description: 'You need to be logged in to make a payment'
            });
            navigate('/login');
            return;
        }
    };

    async function handleToken(token) {
        const response = await axios.post("http://localhost:8080/checkout", {
            token,
            total
        });

        const { status } = response.data;
        if (status === "success") {
            toast.success("Success! Product Purchased", {
                style: { background: '#00cc66', color: 'white' },
                icon: '✅'
            });
        } else {
            toast.error("Error! Something went wrong", {
                style: { background: '#ff4d4d', color: 'white' },
                icon: '❌'
            });
        }
    }

    return (
        <div className="subtotal">
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
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_left">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            
            {user ? (
                <StripeCheckout
                    stripeKey="pk_test_51RWHoXBOMMUuvMaTLZLegxA7KcUMVI5g8fymx0LSA3X7HvPZD8LjSKzii6zGOKuJNfEvHxoQDIheXFFzQwAvVNCJ008cxZG3A8"
                    token={handleToken}
                    amount={total * 100}
                    name="Amazon Clone"
                    description={`Your total is $${total}`}
                    image="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    currency="USD"
                    shippingAddress
                    billingAddress
                />
            ) : (
                <button onClick={handlePayment} className="subtotal_button">
                    Proceed to Checkout
                </button>
            )}
        </div>
    );
}

export default Subtotal;
