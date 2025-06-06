import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from '@material-ui/icons';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../firebase";
import { useStateValue } from '../StateProvider';
import { Toaster, toast } from 'sonner';

function Header() {
  const [{basket,dispatch}]=useStateValue();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthentication = async () => {
    if (user) {
      try {
        toast.promise(
          new Promise((resolve) => setTimeout(() => resolve(signOut(auth)), 2000)),
          {
            loading: 'Signing out...',
            success: () => {
              toast.success('Successfully signed out!', {
                style: { background: '#00cc66', color: 'white' },
                icon: '👋'
              });
            },
            error: (err) => {
              toast.error('Error signing out', {
                style: { background: '#ff4d4d', color: 'white' },
                icon: '❌'
              });
            },
            style: { background: '#4d79ff', color: 'white' },
            icon: '⏳'
          }
        );
      } catch (error) {
        toast.error('Error signing out', {
          style: { background: '#ff4d4d', color: 'white' },
          icon: '❌'
        });
      }
    }
  };

  return (
    <div className="header">
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
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          className="header_logo"
        />
      </Link>
      
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={user ? '/' : '/login'}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello {user ? user.email : "Guest"}</span>
            <span className="header_optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket className="header_basketIcon" />
            <span className="header_optionLineTwo">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
 