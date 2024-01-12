"use client"

import { MyImage } from "../MyImage/MyImage";
import Link from "next/link";

import style from "./Hotels.module.css";

const HotelCard = ({ branch }) => {
  return (
    <figure className={style.hotel_card}>
      <MyImage
        src={`${branch.images[0].url}`}
        alt={branch.images[0].alt}
        className={style.hotel_image}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
      />
      <figcaption className={style.figcaption}>
        <h3 className={`h3 ${style.hotel_card_title}`}>{branch.name} {branch?.subheading && (<><br /> {branch.subheading} </>)} </h3>
        <Link href={branch.link} className={style.btn_view}>View More</Link>
      </figcaption>
  </figure>
  );
}

export { HotelCard };
