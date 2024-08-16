import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';

export default function App() {
    return (
        <div className={styles.App}>
            <NavBar />
        </div>
    );
}
