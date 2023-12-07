"use client"

import { useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import WalkWay from "../../../../public/images/walkway.jpg";
import OpenBar from "../../../../public/images/datanomics_onipanu_openbar.jpg";
import Restaurant from "../../../../public/images/restaurant.jpg";

import style from './ImageSlider.module.css';
import Image from "next/image";

const images = [
  {
    id: 1,
    src: WalkWay,
    caption: "Walkway"
  },
  {
    id: 2,
    src: OpenBar,
    caption: "Open Bar"
  },
  {
    id: 2,
    src: Restaurant,
    caption: "Restaurant"
  }
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  
  const next = () => setCurrent(current === length - 1 ? 0 : current + 1);

  const prev = () => setCurrent(current === 0 ? length - 1 : current - 1);

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
      {
        images.map((slide, index) => (
          <div className={`${style.slide} ${index === current && style.active}`} key={index}>
            {
              index === current && (
                <div className={style.slide_content}>
                  <Image
                    src={slide.src} alt="image"
                    className={style.image}
                    fill
                  />
                  {/* <span className={style.slide_caption}>{slide.caption}</span> */}
                </div>
              )
            }
          </div>
        ))
      }
    </div>
  );
};

export { ImageSlider };
