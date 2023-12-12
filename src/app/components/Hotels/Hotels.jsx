import Image from "next/image";
import OguduHotel from "../../../../public/images/ogudu_hotel.jpg";
import OnipanuHotel from "../../../../public/images/Governor.jpg";
import ParliamentHotel from "../../../../public/images/parliament_10.jpg";
import IshuaHotel from "../../../../public/images/ishua_standard_room_2.jpg";
import style from "./Hotels.module.css";
import Link from "next/link";
import { HorizontalLines } from "../HorizontalLines/HorizontalLines";

const Hotels = () => {
  return (
    <section className={style.hotels}>
      <h1 className={`h1 text-center`}>Popular Destinations</h1>
      <HorizontalLines />
      <div className={style.lines}>
        <div className={style.line_1}></div>
        <div className={style.line_2}></div>
        <div className={style.line_3}></div>
      </div>
      <div className="container">
        <div className={style.hotel_content}>
          <figure className={style.hotel_card}>
            <Image src={OguduHotel} alt="ugbeh" className={style.hotel_image} fill />
            <figcaption className={style.figcaption}>
              <h3 className={`h3 ${style.hotel_card_title}`}>Ogudu Guesthouse</h3>
              <Link href="/#" className={style.btn_view}>View More</Link>
            </figcaption>
          </figure>
          <figure className={style.hotel_card}>
            <Image src={OnipanuHotel} alt="ugbeh" className={style.hotel_image} fill />
            <figcaption className={style.figcaption}>
              <h3 className={`h3 ${style.hotel_card_title}`}>Onipanu Guesthouse</h3>
              <Link href="/#" className={style.btn_view}>View More</Link>
            </figcaption>
          </figure>
          <figure className={style.hotel_card}>
            <Image src={ParliamentHotel} alt="ugbeh" className={style.hotel_image} fill />
            <figcaption className={style.figcaption}>
              <h3 className={`h3 ${style.hotel_card_title}`}>Parliament Hotel</h3>
              <Link href="/#" className={style.btn_view}>View More</Link>
            </figcaption>
          </figure>
          <figure className={style.hotel_card}>
            <Image src={IshuaHotel} alt="ugbeh" className={style.hotel_image} fill />
            <figcaption className={style.figcaption}>
              <h3 className={`h3 ${style.hotel_card_title}`}>Ishua Hotel</h3>
              <Link href="/#" className={style.btn_view}>View More</Link>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export { Hotels };
