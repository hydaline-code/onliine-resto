import React from 'react';
import './styles/aboutpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsAltH, faEnvelope, faLocationDot, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Aboutpage = () => (
  <section className="about">
    <form action="" className="search-resto">
      <h6>
        Search by restaurants
        <FontAwesomeIcon icon={faArrowsAltH} />
      </h6>
      <span>
        <input type="text" placeholder="Enter your restaurant" />
        <button type="submit">Search</button>
      </span>
    </form>
    <div className="about-links">

      <div className="abt-link">
        <div className="contact-links-text">
          <h1>AfroEats</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, consectetur!
          </p>
        </div>

        <ul className="contact-links-social">
          <li>Follow Us: </li>
          <li><FontAwesomeIcon icon={faFacebook} size="1x" /></li>
          <li><FontAwesomeIcon icon={faInstagram} size="1x" /></li>
          <li><FontAwesomeIcon icon={faTwitter} size="1x" /></li>
        </ul>
      </div>
      <div className="abtlinks">
        <ul className="menu">
          <li>Links</li>
          <li>
            Home
          </li>
          <li>
            Menu
          </li>
          <li>
            Category
          </li>
          <li>
            AboutUs
          </li>
        </ul>
        <ul className="menu-contact">
          <li> Contact Us</li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />

            Location
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />

            Phone
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />

            Email
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Aboutpage;
