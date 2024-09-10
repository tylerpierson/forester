import React, { useState, useEffect } from 'react';
import styles from './MerchCarousel.module.scss';

const MerchCarousel = ({ isFaded }) => {
  const images = [
    { src: '/img/hat1.png', alt: 'Image 1', link: 'https://forestermerch.com/products/lose-your-mind-find-your-soul-hat' },
    { src: '/img/hat2.png', alt: 'Image 2', link: 'https://forestermerch.com/products/forester-5-panel-hat' },
    { src: '/img/hoodie.png', alt: 'Image 3', link: 'https://forestermerch.com/products/sequoia-hoodie' },
    //add as many merch images as you see fit, the carousel will display up to 3 images at a time on screen
  ];

  const visibleImages = images.length > 3 ? images : images.slice(0, 3);
  
  const extendedImages = images.length > 3 ? [...visibleImages, ...visibleImages, ...visibleImages] : visibleImages;

  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldScroll = images.length > 3; 

  useEffect(() => {
    let interval;
    if (shouldScroll) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (visibleImages.length * 3)); 
      }, 3000); 
    }

    return () => {
      if (interval) clearInterval(interval); 
    };
  }, [shouldScroll, visibleImages.length]);

  return (
    <div id="store" className={isFaded ? `${styles.faded} ${styles.carouselContainer}` : `${styles.carouselContainer}`}>
      <div className={styles.carousel}>
        <div
          className={styles.carouselInner}
          style={{
            transform: `translateX(-${shouldScroll ? (currentIndex % visibleImages.length) * (100 / 3) : 0}%)`,
          }}
        >
          {extendedImages.map((image, index) => (
            <div className={styles.carouselItem} key={index} style={{ flex: '0 0 33.33%' }}>
              <a target="_blank" href={image.link} rel="noopener noreferrer">
                <img src={image.src} alt={image.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
      {shouldScroll && (
        <div className={styles.dotsContainer}>
          {Array.from({ length: Math.ceil(visibleImages.length / 3) }).map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentIndex % visibleImages.length === index * 3 ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index * 3)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MerchCarousel;
