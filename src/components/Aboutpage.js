import React from "react";
import './styles/aboutpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowsAltH, faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Aboutpage =() =>{
  return(
    <section className="about">
  <form action="" className="search-resto">
    <h6>Search by restaurants   <FontAwesomeIcon icon={faArrowsAltH} /></h6>
    <span>
    <input type="text" placeholder="Enter your restaurant" />
    <button>Search</button>
    </span>
  </form>
  <div className="about-links">
  <div className="contact-links-text">
    <h1>AfroEats</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, consectetur!
    </p>
  </div>
    <ul  className="contact-links-social" >
      <li>Follow Us: </li>
      <li><a href=""><FontAwesomeIcon icon={faFacebook} size="1x" /></a></li>
      <li><a href=""><FontAwesomeIcon icon={faInstagram} size="1x" /></a></li>
      <li><a href=""><FontAwesomeIcon icon={faTwitter} size="1x" /></a></li>
    </ul>

    <ul className="menu">
    <li>Links</li>
    <li><a href="#"></a> Home</li>
    <li> <a href="#"></a> Menu</li>
    <li> <a href="#"></a> Category</li>
    <li> <a href=""></a> AboutUs</li>
    </ul>
    <ul className="menu-contact">
    <li> Contact Us</li>
    <li><a href=""><FontAwesomeIcon icon={faLocationDot} /></a> Location</li>
    <li><a href=""><FontAwesomeIcon icon={faPhone} /></a> Phone</li>
    <li><a href=""><FontAwesomeIcon icon={faEnvelope} /></a> Email</li>
    </ul>
    </div>
    </section>
  )
}

export default Aboutpage;