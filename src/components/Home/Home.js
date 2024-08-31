import React from 'react';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <p className='hashtag'>#SM</p>
      <div className='text-section'>
        <h1>Sai <span>weds</span> Mahi</h1>
        <p className='para-txt'>We're getting married on</p>
        <p>26th October 2024</p>
      </div>
    </div>
  );
};

export default Home;