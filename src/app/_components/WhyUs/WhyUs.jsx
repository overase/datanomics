import {
  PiCameraPlusFill,
  PiCameraPlusLight,
  IoRestaurantOutline,
  IoRestaurant,
  BsLightbulbFill,
  BsLightbulb
} from "@/app/_ui/icons/icons";

import { HorizontalLines } from "../HorizontalLines/HorizontalLines";

import style from "./WhyUs.module.css";

const WhyUs = () => {
  return (
    <div className="container">
      <div className={`${style.why_us}`}>
        <div className={`mb_4 ${style.why_us_header}`}>
          <div className="header-content">
            <div className="flex justify-center">
              <h2 className="h2">
                <div className="h2-content"><span className="text-gold">WHY</span> US</div>
              </h2>
            </div>
          </div>
          <HorizontalLines />
          <p className={style.why_us_text}>The reason our customers chooses us over competitors are not limited to these</p>
        </div>
        <div className="flex-col flex-md-row gap-4 justify-space-between">
          <div className={`col flex-col align-center ${style.why_us_card}`}>
            <div className={style.icon_container}>
              <PiCameraPlusLight size={30} className={style.light_icon} />
              <PiCameraPlusFill size={30}  className={style.fill_icon} />
            </div>
            <div className={style.most_popular_header}>
              <div className={style.most_popular_heading}>Security</div>
            </div>
            <p className={style.description}>
              All our hotels and guest houses are located very close to the security agencies
            </p>
          </div>
          <div className={`col flex-col align-center ${style.why_us_card}`}>
            <div className={style.icon_container}>
              <IoRestaurantOutline size={30} className={style.light_icon} />
              <IoRestaurant size={30}  className={style.fill_icon} />
            </div>
            <div className={style.most_popular_header}>
              <div className={style.most_popular_heading}>Restaurant</div>
            </div>
            <p className={style.description}>
              Our restaurant serves African and continental dishes, in a clean and relaxing atmosphere.
            </p>
          </div>
          <div className={`col flex-col align-center ${style.why_us_card}`}>
            <div className={style.icon_container}>
              <BsLightbulb size={30} className={style.light_icon} />
              <BsLightbulbFill size={30} className={style.fill_icon} />
            </div>
            <div className={style.most_popular_header}>
              <div className={style.most_popular_heading}>Electricity</div>
            </div>
            <p className={style.description}>
              We are equiped with spohisticated generating set to continually make power available to our guest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { WhyUs };
