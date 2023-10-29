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

  const largeScreenSettings = {
    slidesToShow: 11, // Adjust the number of slides to show as per your design
    slidesToScroll: 4, // Number of slides to scroll
    infinite: true,
    autoplay: true,
    speed: 500,
  };
  
  return (
    
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="countries">
          <Slider {...window.innerWidth > 768 ? largeScreenSettings : settings} className="slider">
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
          
          <div>
        
      
          </div>
        </ul>
        
      )}
      
    </div>
  );
  
};

export default CountryList;
