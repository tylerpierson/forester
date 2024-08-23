import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import SocialMedia from './components/SocialMedia/SocialMedia';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import VideoBanner from './components/VideoBanner/VideoBanner';
import TourSection from './components/TourSection/TourSection';

export default function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <VideoBanner />
            <SocialMedia />
            <TourSection />
            <ImageCarousel />
            <SocialMedia />
        </div>
    );
}
