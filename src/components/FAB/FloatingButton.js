import React, { useEffect } from 'react';
import googleMap from '../../assets/gmap.png'; // Path to your Google Maps icon

const FloatingActionButton = () => {
  
  useEffect(() => {
    isMobileDevice();
  }, []);
  const isMobileDevice = () => {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  };

  // Handle FAB click to navigate to Google Maps
  const handleFabClick = () => {
    const url = "https://maps.app.goo.gl/YYxKaeoCYpmVvnqj8";
      window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating Action Button */}
      <div style={styles.fab} onClick={handleFabClick}>
        <img src={googleMap} alt="Google Maps" style={styles.fabIcon} />
      </div>
    </>
  );
};

// Inline styles (optional)
const styles = {
  fab: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: '1000',
  },
  fabIcon: {
    width: '30px',
    height: '30px',
  },
};

export default FloatingActionButton;