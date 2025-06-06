import React from "react";
import "./css/Home.css";
import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://m.media-amazon.com/images/I/71h15GsHkvL._SX3000_.jpg"
          alt="Banner Image"
          className="home_image"
        />
        <div className="home_row">
          <Product
            id="1"
            title="Instant Print Camera for Kids"
            description="Capture memories instantly with this kid-friendly camera featuring 1080P video recording, built-in games, and fun filters. Perfect for young photographers!"
            price={28.99}
            image="https://m.media-amazon.com/images/I/71E--vZiMML._AC_SY355_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Sony PlayStation 5 Console"
            description="Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio."
            price={499.99}
            image="https://m.media-amazon.com/images/I/41TnqQ0prBL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="3"
            title="Apple iPhone 15 Pro"
            description="Featuring a titanium design, A17 Pro chip, 48MP camera system, and USB-C charging. The most powerful iPhone ever."
            price={999.99}
            image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Samsung 65-inch QLED TV"
            description="Experience stunning picture quality with Quantum Dot technology, HDR, and smart features. Perfect for movies and gaming."
            price={1299.99}
            image="https://m.media-amazon.com/images/I/71+ODv9V5nL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Bose Noise Cancelling Headphones 700"
            description="Premium wireless headphones with 11 levels of active noise cancellation, crystal-clear calls, and up to 20 hours of battery life."
            price={379.99}
            image="https://m.media-amazon.com/images/I/71X1gKBDFWL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="7"
            title="Razer BlackWidow Lite Gaming Keyboard"
            description="Mechanical gaming keyboard with Razer Orange switches, compact design, and customizable RGB lighting for the ultimate gaming experience."
            price={99.99}
            image="https://m.media-amazon.com/images/I/71+ODv9V5nL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="8"
            title="Nintendo Switch Console"
            description="Play anytime, anywhere with the Nintendo Switch. Features a vibrant 7-inch OLED screen, enhanced audio, and a wide adjustable stand."
            price={299.99}
            image="https://m.media-amazon.com/images/I/71+ODv9V5nL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="9"
            title="Fitbit Charge 4 Fitness Tracker"
            description="Track your fitness goals with built-in GPS, heart rate monitoring, sleep tracking, and up to 7 days of battery life."
            price={149.95}
            image="https://m.media-amazon.com/images/I/71+ODv9V5nL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="10"
            title="Samsung Galaxy Watch Active2"
            description="Smartwatch with advanced health monitoring, fitness tracking, and seamless smartphone connectivity. Water-resistant and long battery life."
            price={279.99}
            image="https://m.media-amazon.com/images/I/71+ODv9V5nL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
