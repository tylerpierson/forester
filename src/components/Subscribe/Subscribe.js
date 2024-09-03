import React, { useState } from 'react';
import styles from './Subscribe.module.scss';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    // Reset the message
    setMessage('');

    // Simulate an API call to subscribe the user
    // Replace this with your actual API call
    setTimeout(() => {
      setMessage('Thank you for subscribing!');
      setEmail('');
    }, 1000);
  };

  return (
    <div className={styles.Subscribe}>
        <h2 className={styles.header}>Subscribe to our newsletter</h2>
      <form onSubmit={handleSubmit} className={styles.SubscribeForm}>
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className={styles.SubscribeInput}
          required
        />
        <button type="submit" className={styles.SubscribeButton}>Subscribe</button>
      </form>
      {message && <p className={styles.Message}>{message}</p>}
    </div>
  );
}

export default Subscribe;
