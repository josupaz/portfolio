import React from 'react';
import "./Slider.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import React from 'react'

const Slider = () => {
  return (
    <div className='carousel-container'>
        <div className='carousel-tittle'>
            <h2>my proyects</h2>
        </div>

        <Carousel
            arrows
            slider-PerPage={3}
            infinite
            abunatuibSpeed={200}
            centered
            offset={50}
            itemWidth={400}
        />
            

    </div>
  )
}

export default Slider