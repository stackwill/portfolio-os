import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSystemStore } from '../store/systemStore';

export const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('guest');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useSystemStore();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'guest' && password === '') {
      // Request fullscreen mode
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen().then(() => {
          login();
        }).catch((err) => {
          console.warn('Could not enter fullscreen mode:', err);
          login(); // Login anyway if fullscreen fails
        });
      } else {
        // Fallback for browsers that don't support requestFullscreen
        login();
      }
    } else {
      setError('Invalid credentials. Try username: guest (no password)');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="login-screen"
      style={{
        background: '#008080',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial',
        color: '#fff'
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          background: '#c0c0c0',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '4px 4px 10px rgba(0,0,0,0.3)',
          width: '300px',
          color: '#000'
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Welcome to Portfolio OS
        </h2>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '2px inset #fff'
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '2px inset #fff'
              }}
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                color: 'red',
                marginBottom: '1rem',
                textAlign: 'center'
              }}
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.5rem',
              background: '#008080',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.8rem' }}>
          Hint: Login as guest (no password required)
        </p>
      </motion.div>
    </motion.div>
  );
}; 