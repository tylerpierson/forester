import React, { useState, useEffect } from 'react';
import styles from './AlbumCarousel.module.scss';

const AlbumCarousel = ({ isFaded }) => {
  const images = [
    { src: '/img/moonlight.jpg', alt: 'Image 1', link: 'https://lnk.to/xmoonlight' },
    { src: '/img/watercolor.jpg', alt: 'Image 2', link: 'https://lnk.to/watercolor' },
    { src: '/img/AROL.jpg', alt: 'Image 3', link: 'https://lnk.to/ARoL' },
    { src: '/img/kerosene.jpg', alt: 'Image 4', link: 'https://lowly.ffm.to/forester-kerosene' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const visibleImages = [
    images[currentIndex % images.length],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <div
      id="newmusic"
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
    </div>
  );
};

export default AlbumCarousel;
