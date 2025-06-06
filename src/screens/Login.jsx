import React, { useState, useEffect } from 'react';
import "./css/Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Toaster, toast } from 'sonner';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTimeout, setEmailTimeout] = useState(null);
  const [passwordTimeout, setPasswordTimeout] = useState(null);

  const signIn = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields', {
        style: { background: '#ff4d4d', color: 'white' },
        icon: '❌'
      });
      return;
    }

    toast.promise(
      new Promise((resolve) => setTimeout(() => resolve(signInWithEmailAndPassword(auth, email, password)), 2000)),
      {
        loading: 'Signing in...',
        success: (data) => {
          console.log("User signed in:", data.user);
          navigate("/");
          return 'Successfully signed in!';
        },
        error: (err) => err.message,
        style: { background: '#4d79ff', color: 'white' },
        icon: '⏳'
      }
    );
  };

  const register = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields', {
        style: { background: '#ff4d4d', color: 'white' },
        icon: '❌'
      });
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long', {
        style: { background: '#ff4d4d', color: 'white' },
        icon: '❌'
      });
      return;
    }

    try {
      toast.loading('Creating your account...', {
        style: { background: '#4d79ff', color: 'white' },
        icon: '⏳'
      });
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", user);
      toast.success('Account created successfully!', {
        style: { background: '#00cc66', color: 'white' },
        icon: '✅'
      });
    } catch (error) {
      toast.error(error.message, {
        style: { background: '#ff4d4d', color: 'white' },
        icon: '❌'
      });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailTimeout) clearTimeout(emailTimeout);
    setEmailTimeout(setTimeout(() => {
      if (e.target.value) {
        toast.info('Email entered', {
          style: { background: '#4d79ff', color: 'white' },
          icon: '📧'
        });
      }
    }, 1000));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordTimeout) clearTimeout(passwordTimeout);
    setPasswordTimeout(setTimeout(() => {
      if (e.target.value) {
        toast.info('Password entered', {
          style: { background: '#4d79ff', color: 'white' },
          icon: '🔑'
        });
      }
    }, 1000));
  };

  return (
    <div className="login">
      <Toaster 
        richColors 
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: '8px',
            padding: '16px',
            fontSize: '14px',
            fontWeight: '500'
          }
        }}
      />
      <img 
        src="https://cdn.iconscout.com/icon/free/png-512/free-amazon-logo-icon-download-in-svg-png-gif-file-formats--brand-social-media-card-pack-logos-icons-1583154.png?f=webp&w=512" 
        alt="logo" 
        className="login_logo" 
      />
      
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input 
            type="text" 
            value={email} 
            onChange={handleEmailChange}
          />
          <h5>Password</h5>
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange}
          />
          <button onClick={signIn} type="submit" className="login_signInButton">Sign In</button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
          </p>
          <button onClick={register} className="login_registerButton">Create Your Amazon Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
