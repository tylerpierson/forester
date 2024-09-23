import React from 'react';
import styles from './NavBar.module.scss';

function NavBarMobile({ isMenuOpen, toggleMenu, handleNavigationClick }) {
  return (
    <>
      <div className={styles.Hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isMenuOpen && (
        <div className={styles.MobileMenu}>
          <ul className={styles.MobileNavList}>
            <a href="#tour" onClick={(e) => handleNavigationClick(e, '#tour')}><li>TOUR</li></a>
            <a href="#newmusic" onClick={(e) => handleNavigationClick(e, '#newmusic')}><li>NEW MUSIC</li></a>
            <a href="#store" onClick={(e) => handleNavigationClick(e, '#store')}><li>STORE</li></a>
            <a href="#videos" onClick={(e) => handleNavigationClick(e, '#videos')}><li>VIDEOS</li></a>
            <a href="#mission" onClick={(e) => handleNavigationClick(e, '#mission')}><li>OUR MISSION</li></a>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBarMobile;
