import React from "react";
import "./Slider.css";


const slidesInfo = [
  {
    src:
      "./cisco2.jpg",
    alt: "Cisco",
    desc: "Cisco",
  },
  {
    src:
      "./microsoft2.jpg",
    alt: "Microsoft",
    desc: "Microsoft",
  },
  {
    src:
      "./dell2.jpg",
    alt: "Dell",
    desc: "Dell",
  },
  {
    src:
      "./hp2.jpg",
    alt: "HP",
    desc: "HP",
  },
  {
    src:
      "./forti2.jpg",
    alt: "Fortinet",
    desc: "Fortinet",
  },
];


const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
