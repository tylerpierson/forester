import React, { useState, useEffect } from 'react';
import styles from './YoutubeSection.module.scss'; 

function YoutubeSection() {
  const [playlistItems, setPlaylistItems] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(''); // State for selected video

  // Your YouTube API key and Playlist ID
  const API_KEY = 'AIzaSyBuwCkEx76Gp4WDl43QzGBr_StnuW-s4ME';
  const PLAYLIST_ID = 'PLZhApeQFymxqHAIofGEAKCWtM8Z7tvtgg';

  useEffect(() => {
    // Fetch playlist items from YouTube Data API
    const fetchPlaylistItems = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=25&key=${API_KEY}`
        );
        const data = await response.json();
        setPlaylistItems(data.items);
        // Set the first video as the default selected video
        setSelectedVideo(data.items[0].snippet.resourceId.videoId);
      } catch (error) {
        console.error('Error fetching playlist items:', error);
      }
    };

    fetchPlaylistItems();
  }, [PLAYLIST_ID]);

  return (
    <div id="videos" className={styles.YoutubeSection}>
      <div className={styles.PlaylistContainer}>
        {/* Sidebar with playlist items */}
        <div className={styles.PlaylistSidebar}>
          {playlistItems.map((item) => (
            <div
              key={item.snippet.resourceId.videoId}
              className={styles.PlaylistItem}
              onClick={() => setSelectedVideo(item.snippet.resourceId.videoId)} // Change video on click
            >
              <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
              {/* Replace &nbsp; with a space in the title */}
              <p>{item.snippet.title.replace(/\u00A0/g, ' ')}</p>
            </div>
          ))}
        </div>

        {/* Embedded YouTube player */}
        <div className={styles.PlaylistEmbed}>
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default YoutubeSection;
