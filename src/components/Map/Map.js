import React from 'react';

import receptionImg from './../../assets/reception.png';
import weddingImg from './../../assets/wedding.png';

import { AddToCalendarButton } from 'add-to-calendar-button-react';

import './Map.css';

const Map = () => {
  return (
    <div className="mapouter">
      <h3 className='header'>When</h3>
      <div className='events'>
        <div className='event'>
          <img src={receptionImg} alt='Reception Event Icon' />
          <p className='title'>The Reception</p>
          <p>Saturday, 26th October 2024</p>
          <p>6:00 PM Onwards</p>
          <AddToCalendarButton
            name="Sai & Mahi Reception"
            options={['Apple','Google', "iCal|Calendar"]}
            location="TTD Kalyana Mandapam, Kakinada"
            startDate="2024-10-26"
            endDate="2024-10-26"
            startTime="17:00"
            endTime="23:59"
            timeZone="Asia/Kolkata"
            size="1|1|1"
            pastDateHandling="hide"
            hideCheckmark="true"
            trigger="hover"
            buttonStyle="text"
            hideBranding="true"
            styleLight="--btn-text: #04364A;"
            inline
          ></AddToCalendarButton>
        </div>
        <div className='event'>
          <img src={weddingImg} alt='Wedding Event Icon' />
          <p className='title'>The Wedding</p>
          <p>Saturday, 26th October 2024</p>
          <p> At 10:31 PM</p>
          <AddToCalendarButton
            name="Sai & Mahi Wedding Ceremony"
            options={['Apple','Google', "iCal"]}
            location="TTD Kalyana Mandapam, Kakinada"
            startDate="2024-10-26"
            endDate="2024-10-26"
            startTime="20:00"
            endTime="23:59"
            timeZone="Asia/Kolkata"
            size="1|1|1"
            pastDateHandling="hide"
            hideCheckmark="true"
            trigger="hover"
            buttonStyle="text"
            hideBranding="true"
            styleLight="--btn-text: #04364A;"
            inline
          ></AddToCalendarButton>
        </div>
      </div>
      <h3 className='header'>Where</h3>
      <div className="gmap_canvas"> 
        {/* <iframe title="msr function hall" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.512861010163!2d81.99649907569875!3d16.949305115276584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a379a80d696a059%3A0x4e033447333a6120!2sMSR%20Function%20Hall%20Balabhadrapuram!5e0!3m2!1sen!2sin!4v1697727963243!5m2!1sen!2sin" width="90%" height="300" allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe title="TTD Kalyana Madapam, Kakinada" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3816.485629168567!2d82.2297357!3d16.9506465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3827e1fb389eb9%3A0xb2a276e082f9e8d!2sTTD%20Kalyana%20Mandapam%20kakinada!5e0!3m2!1sen!2sin!4v1725073911721!5m2!1sen!2sin" width="90%" height="300" allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Map;