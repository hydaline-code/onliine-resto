import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import meal1 from './images/meal1.webp';
import meal2 from './images/meal2.jpeg';
import meal3 from './images/meal3.jpeg';
import meal4 from './images/meal4.jpg';
import './styles/Restaurant.css';

const Restaurants = () => {
  const data = [
    {
      image: meal1,
      location: 'Nigeria',
      stars: faStarHalf,
      numberofStars: '4.5',
      time: '25mins',
    },
    {
      image: meal2,
      location: 'Cameroon',
      stars: faStarHalf,
      numberofStars: '4.5',
      time: '20mins',
    },
    {
      image: meal3,
      location: 'Togo',
      stars: faStarHalf,
      numberofStars: '4.0',
      time: '20mins',
    },
    {
      image: meal4,
      location: 'Liberia',
      stars: faStar,
      numberofStars: '5.0',
      time: '20mins',
    },
    {
      image: meal3,
      location: 'South Africa',
      stars: faStarHalf,
      numberofStars: '3.5',
    },,
    {
      image: meal2,
      location: 'Sierra Lone',
      stars: faStar,
      numberofStars: '5.2',
      time: '25mins',
    },
    {
      image: meal3,
      location: 'Rwanda',
      stars: faStar,
      numberofStars: '5.1',
      time: '35mins',
    },
    {
      image: meal1,
      location: 'Sierra Lone',
      stars: faStar,
      numberofStars: '5.2',
      time: '25mins',
    },
  ];

  return (
    <div className="restaurants">
      <div className="title">
        <p>
          Popular Restaurants
          <span><FontAwesomeIcon icon={faStar} /></span>
        </p>
        <button type="submit">See more</button>
      </div>
      <div className="resto-container">
        {data.map((restaurants) => (
          <div key={uuidv4()} className="location">
            <div className="locationimg">
              <img src={restaurants.image} alt={restaurants.name} />
            </div>
            <p className="meal-name">Lorem ipsum dolor </p>
            <p className="name">
              {restaurants.location}
            </p>
            <div className="kitchen-stars">
              <p className="icon">
                <span className="stars"><FontAwesomeIcon icon={restaurants.stars} className="icon" /></span>
                {restaurants.numberofStars}
              </p>
              <p className="time">
                <FontAwesomeIcon icon={faKitchenSet} className="icon2" />
                {' '}
                <span className="time">{restaurants.time}</span>
                {' '}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>

  );
};

export default Restaurants;
