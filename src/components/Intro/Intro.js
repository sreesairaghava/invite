import React from 'react';

import groomImg from './../../assets/Groom-Sai.JPG';
import brideImg from './../../assets/Bride-Mahi.JPG';

import './Intro.css';

const Intro = () => {
  return (
    <div className='intro-section'>
      <div className='groom'>
        <img src={groomImg} alt='Sai' />
        <p>#Groom</p>
      </div>
      <div className='bride'>
        <p>#Bride</p>
        <img src={brideImg} alt='Mahi' />
      </div>
    </div>
  );
};

export default Intro;