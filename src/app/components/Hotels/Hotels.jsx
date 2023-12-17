import { HorizontalLines } from "../HorizontalLines/HorizontalLines";
import { branches } from "@/app/branch/lib/branches";
import { HotelCard } from "./HotelCard";
import style from "./Hotels.module.css";

const Hotels = () => {
  return (
    <section className={style.hotels}>
      <h1 className={`h1 text-center`}>Popular Destinations</h1>
      <HorizontalLines />
      <div className="container">
        <div className={style.hotel_content}>
          {branches.slice(0, 4).map((branch, index) => (<HotelCard  branch={branch} key={index} />))}
        </div>
      </div>
    </section>
  );
};

export { Hotels };
