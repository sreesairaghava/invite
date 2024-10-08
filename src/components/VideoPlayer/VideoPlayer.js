import React from 'react';

import Countdown from '../Countdown/Countdown';

import saveTheDateImg from './../../assets/savethedate.png';

import './VideoPlayer.css';

const VideoPlayer = ({ displayCountDown, src }) => {
  return ( 
    <div className='video-player'>
      <div className='desc'>
        <img src={saveTheDateImg} alt='save the date' />
        <p>the countdown is on!!</p>
        <h3> 26 October, 2024 </h3>
      </div>
      { displayCountDown && (
        <Countdown deadline='October, 26, 2024 10:31:00 PM' />
      )}
      <div className='video-responsive'>
        <iframe
          id='savethedate'
          title='savethedate'
          width='640' 
          height='360'
          allowFullScreen="allowFullScreen"
          src={`https://www.youtube.com/embed/${src}?rel=0&controls=1&playsinline=0&modestbranding=1&cc_load_policy=0&iv_load_policy=3&autohide=0&showinfo=0&autoplay=0&enablejsapi=1`}
          frameborder='0'
        ></iframe>
      </div>
      <div className='text-section'>
        <p> You're are cordially invited to join us... </p>
        <p> On our blissful union and make our day! </p>
      </div>
    </div>
  );
};

export default VideoPlayer;