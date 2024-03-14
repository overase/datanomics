import { HorizontalLines } from "../HorizontalLines/HorizontalLines";
import { branches } from "@/app/branch/lib/branches";
import { HotelCard } from "./HotelCard";
import { Each } from "../Each/Each";
import style from "./Hotels.module.css";

const Hotels = () => {
  return (
    <section className={style.hotels}>
      <h2 className={`h2 text-center`}><span className="text-gold">POPULAR</span> <span className="text-secondary">DESTINATIONS</span></h2>
      <HorizontalLines />
      <div className="container">
        <div className={style.hotel_content}>
        <Each
            of={branches.slice(0, 4)}
            render={(item, index) => <HotelCard  branch={item} key={index} />}
          />
        </div>
      </div>
    </section>
  );
};

export { Hotels };
