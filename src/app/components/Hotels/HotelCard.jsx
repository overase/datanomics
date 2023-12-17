import Image from "next/image";
import Link from "next/link";

import style from "./Hotels.module.css";

const HotelCard = ({ branch }) => {
  return (
    <figure className={style.hotel_card}>
      <Image src={branch.images[0].url} alt={branch.images[0].alt} className={style.hotel_image} fill />
      <figcaption className={style.figcaption}>
        <h3 className={`h3 ${style.hotel_card_title}`}>{branch.name} {branch?.subheading && (<><br /> {branch.subheading} </>)} </h3>
        <Link href={branch.link} className={style.btn_view}>View More</Link>
      </figcaption>
  </figure>
  );
}

export { HotelCard };
