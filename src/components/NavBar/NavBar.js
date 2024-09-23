import React, { useState, useEffect } from 'react';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';
import styles from './NavBar.module.scss';

function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [disableScrollFade, setDisableScrollFade] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (disableScrollFade) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [disableScrollFade]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigationClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    setDisableScrollFade(true);
    setIsVisible(true);

    if (isMobile) {
      setIsMenuOpen(false);
    }

    setTimeout(() => setDisableScrollFade(false), 2000);
  };

  return (
    <div className={`${styles.NavBar} ${!isVisible ? styles.hidden : ''}`}>
      <div className={styles.NavBarContainer}>
        {isMobile ? (
          <NavBarMobile
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            handleNavigationClick={handleNavigationClick}
          />
        ) : (
          <NavBarDesktop handleNavigationClick={handleNavigationClick} />
        )}
      </div>
    </div>
  );
}

export default NavBar;
