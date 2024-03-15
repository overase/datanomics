import { HorizontalLines } from "../HorizontalLines/HorizontalLines";
import { branches } from "@/app/branch/lib/branches";
import { HotelCard } from "./HotelCard";
import { Each } from "../Each/Each";
import style from "./Hotels.module.css";

const Hotels = () => {
  return (
    <section className={style.hotels}>
      <div className="header-content">
        <div className="flex justify-center">
          <h2 className="h2">
            <div className="h2-content"><span className="text-gold">POPULAR</span> DESTINATIONS</div>
          </h2>
        </div>
      </div>
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
