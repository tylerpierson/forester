import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import SocialMedia from './components/SocialMedia/SocialMedia';

export default function App() {
    return (
        <div className={styles.App}>
            <img className={styles.logo} src='/img/forester-logo-noname.png' alt='Forester Logo' />
            <NavBar />
            <SocialMedia />
        </div>
    );
}
