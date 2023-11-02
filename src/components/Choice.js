import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import fruit from './images/fruit.jpg';
import strawberry from './images/strawberry.jpg';
import meat from './images/meat.jpg';
import pizza from './images/pizza.jpg';
import './styles/choice.css';

const Choice = () => {
  const data = [
    {
      image: pizza,
      name: 'Delice pizza',
    },
    {
      image: strawberry,
      name: 'Strawberry',
    },
    {
      image: meat,
      name: 'Beaf steak',
    },
    {
      image: fruit,
      name: 'Fresh fruits',
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const largeScreenSettings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    autoplay: true,
    speed: 500,
  };

  return (
    <div>
      <div className="meals">
        <span className="meals-mind">
          <p>What&rsquo;s on your mind?</p>
          <button type="button">See more</button>
        </span>
        <Slider {...window.innerWidth > 768 ? largeScreenSettings : settings} className="slider">
          {data.map((item) => (
            <div key={item.id} className="meals-choice">
              <img src={item.image} alt="" />
              <h6 className="meal-text">{item.name}</h6>
            </div>
          ))}
        </Slider>
      </div>

    </div>

  );
};

export default Choice;
