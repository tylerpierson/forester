import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import SocialMedia from './components/SocialMedia/SocialMedia';

export default function App() {
    return (
        <div className={styles.App}>
            <img className={styles.logo} src='https://images.squarespace-cdn.com/content/v1/5c708346d74562229cb7c872/1555020988289-4094VIM7BKQ2AWU6QOBG/Forester+logo2.png?format=1500w' alt='Forester Logo' />
            <NavBar />
            {/* add a video here with social icons overlayed */}
            <SocialMedia />
        </div>
    );
}
