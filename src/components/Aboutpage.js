import React from "react";
import './styles/aboutpage.css'

const Aboutpage =() =>{
  return(
    <section className="about">

<div>
  <form action="">
    <h6>Search by restaurants</h6>
    <input type="text" placeholder="Enter your restaurant" />
    <button>Search</button>
  </form>
</div>
<div>
  <div>
    <h1>AfroEats</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, consectetur!
    </p>
  </div>
  <span>
    <ul>
      <li><a href="">Facebook</a></li>
      <li><a href="">Facebook</a></li>
      <li><a href="">Facebook</a></li>
    </ul>
  </span>
  <div>
    <ul><h6>Links</h6>
    <li>Home</li>
    <li>Menu</li>
    <li>Category</li>
    <li>AboutUs</li>
    </ul>
    <ul><h6>Contact Us</h6>
    <li>Location</li>
    <li>Phone</li>
    <li>Email</li>
    </ul>
  </div>

</div>
    </section>
  )
}

export default Aboutpage;