import React from "react";
import './styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import logo5 from './images/logo5.jpg'

const Header = () => {
  return (
    <div>
    <div className="header">
    <div class="overlay"></div>
      <nav className="navigation">
        <span className="nav-logo">
        <img src={logo5}
      alt="Your Alt Text" />
        </span>
        <div className="login">
          <button>Sell Up</button>
          <button>Login</button>
        </div>
      </nav>
      <div className="title-header">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <p>Lorem, ipsum dolor ipsum dolo.</p>
      </div>
      <div className="sign-form">
      <form action="">
      <div className="search-bar">
      <input type="text" placeholder="Search a restaurant" />
      <FontAwesomeIcon icon={faLocationDot} className="search-icon" />
    </div>
        <button className="search-btn">search</button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Header;
