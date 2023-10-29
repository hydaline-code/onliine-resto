import React from "react";
import chef1 from './images/chef1.jpg'
import ice from './images/ice.jpg'
import './styles/fooddetail.css'

const Fooddetail =()=>{
  return (
    <div className="food-detail">
      <div className="detail">
        <img src={chef1} alt="chefpic" className="chef" />
        <h6 className="text-detail">Lorem ipsum, dolor </h6>
        <p className="detail-cook">  Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Error libero commodi sed quasi minima,
         iusto velit eius ullam harum sunt in dolores, deleniti soluta 
         nulla doloremque explicabo obcaecati reiciendis porro!</p>
        <button className="sell">Sell with us</button>
        </div>
        <div className="food-img">
          <img src= {ice} alt="mealdetail" />
        </div>
      </div>
   
  )
}

export default Fooddetail;