import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import SocialMediaTop from './components/SocialMedia/SocialMediaTop';
import SocialMediaMobile from './components/SocialMedia/SocialMediaMobile';
import SocialMediaBottom from './components/SocialMedia/SocialMediaBottom';
import AlbumCarousel from './components/AlbumCarousel/AlbumCarousel';
import VideoBanner from './components/VideoBanner/VideoBanner';
import TourSection from './components/TourSection/TourSection';
import MerchCarousel from './components/MerchCarousel/MerchCarousel';
import BackToTop from './components/BackToTop/BackToTop';
import MissionStatement from './components/MissionStatement/MissionStatement';
import Footer from './components/Footer/Footer';
import Subscribe from './components/Subscribe/Subscribe';
import YoutubeSection from './components/YoutubeSection/YoutubeSection';


export default function App() {
    const [isFaded, setIsFaded] = useState(false);

    return (
        <div className={styles.App}>
            <NavBar isFaded={isFaded} setIsFaded={setIsFaded} />
            <VideoBanner/>
            <SocialMediaMobile/>
            <TourSection/>
            <AlbumCarousel/>
            <MerchCarousel/>
            <YoutubeSection/>
            <MissionStatement />
            <Subscribe />
            <SocialMediaBottom isFaded={isFaded}/>
            <Footer />
            <BackToTop />
        </div>
    );
}
