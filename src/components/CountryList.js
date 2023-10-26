import React, { useEffect, useState } from "react"; // react hooks
import './styles/CountryList.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CountryList = () => {
  // Define the initial state
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://restcountries.com/v3.1/region/africa';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network issues');
        }

        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
  };
  
  return (
    
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="countries">
          <Slider {...settings}>
       {countries.map( (country) => (
            <li key={country.name.common} >
              <span className="countries-info">
              <img src={country.flags.png} alt={country.name.common + " flag"} />
              <h5 className="itemstyle">{country.name.common.substring(0, 14)}
                    {country.name.common.length > 14 ? '' : ''}</h5>  
              </span>
            </li>
         )
         )}
          </Slider>
        </ul>
      )}
    </div>
  );
  
};

export default CountryList;
