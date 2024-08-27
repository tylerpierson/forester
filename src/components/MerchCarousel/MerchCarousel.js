import React, { useState, useEffect } from 'react';
import styles from './MerchCarousel.module.scss';

const MerchCarousel = () => {
  const images = [
    { src: '/img/hat1.png', alt: 'Image 1', link: 'https://lnk.to/xmoonlight' },
    { src: '/img/hat2.png', alt: 'Image 2', link: 'https://lnk.to/watercolor' },
    { src: '/img/hoodie.png', alt: 'Image 3', link: 'https://lnk.to/ARoL' },
  ];

  const extendedImages = [...images, ...images, ...images];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length * 3));
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div id="store" className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <div
          className={styles.carouselInner}
          style={{ transform: `translateX(-${(currentIndex % images.length) * (100 / 3)}%)` }}
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
      <div className={styles.dotsContainer}>
        {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${currentIndex % images.length === index * 3 ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index * 3)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MerchCarousel;