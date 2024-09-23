import React from 'react';
import styles from './NavBar.module.scss';

function NavBarDesktop({ handleNavigationClick }) {
  return (
    <ul className={styles.NavList}>
      <a href="#tour" onClick={(e) => handleNavigationClick(e, '#tour')}><li>TOUR</li></a>
      <a href="#newmusic" onClick={(e) => handleNavigationClick(e, '#newmusic')}><li>MUSIC</li></a>
      <a href="#store" onClick={(e) => handleNavigationClick(e, '#store')}><li>STORE</li></a>
      <a href="#videos" onClick={(e) => handleNavigationClick(e, '#videos')}><li>VIDEOS</li></a>
      <a href="#mission" onClick={(e) => handleNavigationClick(e, '#mission')}><li>MISSION</li></a>
    </ul>
  );
}

export default NavBarDesktop;
