import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css"

function LandingPage() {
  return (
    <div>
      <div id='main-container'>
        <section id='image-section'>
          <img id='insta-clone-img' 
          src="https://images.freeimages.com/images/large-previews/841/lens-1418954.jpg" 
          alt="Land-scape-img"/>
          </section>
        <section id='button-section'> 
        <div>
          <h2 id='team'>10x Team 04 </h2>
        </div>
        <nav>
        <ul>
          <Link to='/postview'><button id='enter-btn'>Enter</button></Link>
        </ul>
      </nav>
      </section>
      </div>
     
     
    </div>
  );
}

export default LandingPage;
