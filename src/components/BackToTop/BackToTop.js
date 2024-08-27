import React, { useState, useEffect } from 'react';
import styles from './BackToTop.module.scss';
import { FaArrowUp } from 'react-icons/fa';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.BackToTop}>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.TopButton}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default BackToTop;
