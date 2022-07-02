import React from 'react'
import "./About.css";

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Let me you something about me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui risus, laoreet id hendrerit vitae, iaculis a nunc. Morbi eget imperdiet magna. Sed libero leo, luctus sit amet placerat quis.</p>
        </div>
        <div className='about-img'>
            <img src="https://st2.depositphotos.com/2309453/8796/i/450/depositphotos_87969200-stock-photo-manager-sitting-at-desk-and.jpg" alt="" />
        </div>
    </div>
  )
}

export default About;