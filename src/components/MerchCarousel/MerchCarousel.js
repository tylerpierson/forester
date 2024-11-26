import React, { useState, useEffect } from 'react';
import styles from './MerchCarousel.module.scss';

const MerchCarousel = ({ isFaded }) => {
  const images = [
    { src: '/img/hat5.png', alt: 'Image 1', link: 'https://forestermerch.com/products/forester-5-panel-hat' },
    { src: '/img/shirt.png', alt: 'Image 2', link: 'https://forestermerch.com/products/lose-your-mind-find-your-soul-t-shirt' },
    { src: '/img/hat2.jpg', alt: 'Image 3', link: 'https://forestermerch.com/products/forester-trucker-hat' },
    // Add more merch images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldScroll = images.length > 3;

  useEffect(() => {
    let interval;
    if (shouldScroll) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [shouldScroll, images.length]);

  const visibleImages = shouldScroll
    ? [
        images[currentIndex % images.length],
        images[(currentIndex + 1) % images.length],
        images[(currentIndex + 2) % images.length],
      ]
    : images;

  return (
    <div
      id="store"
      className={isFaded ? `${styles.faded} ${styles.carouselContainer}` : `${styles.carouselContainer}`}
    >
      <div className={styles.carousel}>
        <div className={styles.carouselInner}>
          {visibleImages.map((image, index) => (
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
          {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentIndex === index * 3 ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index * 3)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MerchCarousel;
