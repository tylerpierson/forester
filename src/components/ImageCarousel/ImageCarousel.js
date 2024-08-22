import React, { useState } from 'react';
import styles from './ImageCarousel.module.scss';


const ImageCarousel = () => {
   const images = [
       { src: '/img/album1.png', alt: 'Image 1', link: 'http://lnk.to/xgrow' },
       { src: '/img/album2.png', alt: 'Image 2', link: 'http://lnk.to/xpieces' },
       { src: '/img/album3.png', alt: 'Image 3', link: 'https://lnk.to/whenifallasleep' },
       { src: '/img/album4.png', alt: 'Image 4', link: 'http://lnk.to/xholdingback' },
       { src: '/img/album5.jpeg', alt: 'Image 5', link: 'https://lnk.to/xsitw' },
       { src: '/img/album6.png', alt: 'Image 6', link: 'http://lnk.to/xchemicals' },
       { src: '/img/album7.png', alt: 'Image 7', link: 'https://lnk.to/xthinkingaboutyou' },
       { src: '/img/album8.jpg', alt: 'Image 8', link: 'https://lnk.to/xSayNoMore' },
   ];


   const [currentIndex, setCurrentIndex] = useState(0);


   const goToSlide = (index) => {
       setCurrentIndex(index);
   };


   return (
       <div className={styles.carouselContainer}>
           <div className={styles.carousel}>
               <div className={styles.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                   {images.map((image, index) => (
                       <div className={styles.carouselItem} key={index}>
                           <a target="_blank" href={image.link}>
                               <img src={image.src} alt={image.alt} />
                           </a>
                       </div>
                   ))}
               </div>
           </div>
           <div className={styles.dotsContainer}>
               {images.map((_, index) => (
                   <div
                       key={index}
                       className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                       onClick={() => goToSlide(index)}
                   ></div>
               ))}
           </div>
       </div>
   );
};


export default ImageCarousel;