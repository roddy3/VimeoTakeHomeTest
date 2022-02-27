// import Carousel from 'react-bootstrap/Carousel'
import {Carousel} from "react-bootstrap"
import React from 'react'
import './navigation.css'

import img4 from "../images/img-1.jpg"
import img3 from "../images/img-2.jpg"
import img9 from "../images/img-10.jpg"

function Navigation() {  
  return (
    <div className="Slide">
<Carousel>
  <Carousel.Item>
    <img
      className="FirstText"
      src={img4}
      alt="First slide"
     
    />
    <div className="MONSOON">
      <Carousel.Caption>
        <h2>MONSOON III</h2>
        <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="SecondText"
      src={img3}
      alt="Second slide"
      
    />
    <div className="BEAMS">
      <Carousel.Caption>
        <h2>BEAMS</h2>
        <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="ThirdText"
      src={img9}
      alt="Third slide"
    />
    <div className='Move'>
      <Carousel.Caption>
        <h2>Move 2</h2>
        <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </Carousel.Caption>
    </div>
  </Carousel.Item>
</Carousel>
</div>
  )
}

export default Navigation


