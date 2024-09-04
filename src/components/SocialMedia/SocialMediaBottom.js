import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub, FaTiktok, FaSpotify, FaApple, FaSoundcloud } from 'react-icons/fa';
import styles from './SocialMediaBottom.module.scss';

function SocialMediaBottom() {
  return (
    <div className={styles.socialMedia}>
      <a href="https://facebook.com/upintheforest" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com/forestermusic" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.tiktok.com/@forestermusic" target="_blank" rel="noopener noreferrer">
        <FaTiktok />
      </a>
      <a href="https://x.com/i/flow/login?redirect_after_login=%2Fforestermusic" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://open.spotify.com/artist/3d13oWvwmjcodRr3NzdArc?si=v1zUSeFTSPCvzvARsLHopQ" target="_blank" rel="noopener noreferrer">
        <FaSpotify />
      </a>
      <a href="https://music.apple.com/us/artist/forester/283340674" target="_blank" rel="noopener noreferrer">
        <FaApple />
      </a>
      <a href="https://www.youtube.com/channel/UCFKUg_b8twVUYBorpscv4Rw" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
      <a href="https://soundcloud.com/forester-family" target="_blank" rel="noopener noreferrer">
        <FaSoundcloud />
      </a>
    </div>
  );
}

export default SocialMediaBottom;
