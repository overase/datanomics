"use client"

import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import style from './ImageSlider.module.css';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  
  const next = () => setCurrent(current === length - 1 ? 0 : current + 1);

  const prev = () => setCurrent(current === 0 ? length - 1 : current - 1);

  const goToSlide = (index) => setCurrent(index); 

//   useEffect(() => {
//     const interval = setInterval(() => {
//         next();
//     }, 5000);
//     () => clearInterval(interval);
//   }, [current]);
  return (
    <div className={style.slides}>
      <FaChevronCircleLeft className={`${style.icon} ${style.prev}`} onClick={prev} />
      <FaChevronCircleRight className={`${style.icon} ${style.next}`} onClick={next} />
      <div style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${slides[current].url.src})`}}
        className={style.slide}>
          <span className={style.slide_caption}>{slides[current].caption}</span>
      </div>
      <div className={style.slides_dot}>
        {slides.map((_image, index) =>(
          <div className={`${style.slide_dot} ${index === current && style.slide_dot_active}`} key={index} onClick={() => goToSlide(index)} />
        ))}
      </div>
    </div>
  );
};

export { ImageSlider };
