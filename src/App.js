import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import SocialMediaTop from './components/SocialMedia/SocialMediaTop';
import SocialMediaBottom from './components/SocialMedia/SocialMediaBottom';
import AlbumCarousel from './components/AlbumCarousel/AlbumCarousel';
import VideoBanner from './components/VideoBanner/VideoBanner';
import TourSection from './components/TourSection/TourSection';
import MerchCarousel from './components/MerchCarousel/MerchCarousel';
import BackToTop from './components/BackToTop/BackToTop';
import MissionStatement from './components/MissionStatement/MissionStatement';
import Footer from './components/Footer/Footer';
import Subscribe from './components/Subscribe/Subscribe';


export default function App() {
    const [isFaded, setIsFaded] = useState(false);

    return (
        <div className={styles.App}>
            <NavBar isFaded={isFaded} setIsFaded={setIsFaded} />
            <VideoBanner isFaded={isFaded}/>
            <TourSection isFaded={isFaded}/>
            <AlbumCarousel isFaded={isFaded}/>
            <MerchCarousel isFaded={isFaded}/>
            <MissionStatement />
            <Subscribe />
            <SocialMediaBottom isFaded={isFaded}/>
            <Footer />
            <BackToTop />
        </div>
    );
}
