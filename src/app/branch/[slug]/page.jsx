import { AiFillBulb } from "react-icons/ai";
import { BiSolidCctv } from "react-icons/bi";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaSatelliteDish } from "react-icons/fa6";
import { BiSolidFridge } from "react-icons/bi";
import { LuAirVent } from "react-icons/lu";
import { MdCircle } from "react-icons/md";

import style from './page.module.css';

export default function Page({ params: { slug } }) {
  return (
    <main>
      <section>
        <div className="container">
          <div className={style.branch_content}>
            <h1 className={`h1 ${style.branch_title}`}>Ogudu</h1>
            <div className={style.branch_body}>
              <div className={style.lines}>
                <div className={style.line_1}></div>
                <div className={style.line_2}></div>
                <div className={style.line_3}></div>
              </div>
              <div className="container">
                <div className={style.branch_room_slides}></div>
                <div className={style.branch_details}>
                  <div className={style.branch_room}>
                    <h3 className={`h3 ${style.available_room}`}>Available rooms</h3>
                    <ul className={style.branch_room_list}>
                      <li className={style.branch_room_list_item}>
                        <MdCircle className={style.fill} />
                        <span>Single Room</span>
                      </li>
                      <li className={style.branch_room_list_item}>
                        <MdCircle className={style.fill}  />
                        <span>Executive VIP</span>
                      </li>
                      <li className={style.branch_room_list_item}>
                        <MdCircle className={style.fill}  />
                        <span>Governor{"'"}s Suite</span>
                      </li>
                      <li className={style.branch_room_list_item}>
                        <MdCircle className={style.fill}  />
                        <span>Royal Suite</span>
                      </li>
                    </ul>
                  </div>
                  <div className={style.branch_facility}>
                    <h3 className={`h4 ${style.facility_name}`}>Facilities</h3>
                    <ul className={style.branch_facility_list}>
                      <li className={style.branch_facility_list_item}>
                        <AiFillBulb className={style.fill} />
                        <span>24 hrs power supply</span>
                      </li>
                      <li className={style.branch_facility_list_item}>
                        <BiSolidCctv className={style.fill} />
                        <span>Surveillance Cameras (CCTV)</span>
                      </li>
                      <li className={style.branch_facility_list_item}>
                        <PiTelevisionSimpleFill className={style.fill} />
                        <span>Plasma Televsion</span>
                      </li>
                      <li className={style.branch_facility_list_item}>
                        <FaSatelliteDish className={style.fill} />
                        <span>DSTV</span>
                      </li>
                      <li className={style.branch_facility_list_item}>
                        <BiSolidFridge className={style.fill} />
                        <span>Bedroom Fridge</span>
                      </li>
                      <li className={style.branch_facility_list_item}>
                        <LuAirVent className={style.fill} />
                        <span>Air Conditioning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}