import React from "react";

import MessengerCustomerChat from 'react-messenger-customer-chat';

import LogoRound from "../../img/logoRound.png";
import './Homepage.scss';

export default function Homepage() {
  return (
    <>
      <div className="home__">
        <h1 className="home__title">Binary Matter</h1>
        
        <div className="home__logoLink">
            <a href="#/">
                <img className="home__logoImg" src={LogoRound} alt="Logo Round" />
            </a>
        </div>
        
        <div className="homeCards__">
          <div className="homeCards__card">
            <a href="#courses">Courses</a>
          </div>
        </div>
        
        <h3>Contact Us : </h3>
        <a href="mailto:infobinarymatter@gmail.com">infobinarymatter@gmail.com</a>
      </div>

      <MessengerCustomerChat
        pageId="113166357695746"
        appId="861942261426992"
      />
    </>
  );
}
