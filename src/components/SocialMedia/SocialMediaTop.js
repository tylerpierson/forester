import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub, FaTiktok, FaSpotify, FaApple, FaSoundcloud } from 'react-icons/fa';
import styles from './SocialMediaTop.module.scss';

function SocialMediaTop() {
  return (
    <div className={styles.socialMedia}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
        <FaTiktok />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
        <FaSpotify />
      </a>
      <a href="https://applemusic.com" target="_blank" rel="noopener noreferrer">
        <FaApple />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
      <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
        <FaSoundcloud />
      </a>
    </div>
  );
}

export default SocialMediaTop;
