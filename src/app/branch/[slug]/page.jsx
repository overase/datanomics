import { AiFillBulb } from "react-icons/ai";
import { BiSolidCctv } from "react-icons/bi";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaSatelliteDish } from "react-icons/fa6";
import { BiSolidFridge } from "react-icons/bi";
import { LuAirVent } from "react-icons/lu";
import { MdCircle } from "react-icons/md";

import { branches } from "../lib/branches";

import style from './page.module.css';

export default function Page({ params: { slug } }) {
  const branch = branches.find((branch) => slug === branch.slug);
  return (
    <main>
      <section>
        <div className="container">
          <div className={style.branch_content}>
            <h1 className={`h1 ${style.branch_title}`}>{branch.name}</h1>
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
                      {
                        branch.rooms.map((room) => (
                          <li className={style.branch_room_list_item} key={branch.name}>
                          <MdCircle className={style.fill} />
                          <span>{room}</span>
                        </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className={style.branch_facility}>
                    <h3 className={`h4 ${style.facility_name}`}>Facilities</h3>
                    <ul className={style.branch_facility_list}>
                      {
                        branch.facilities.map((facility, index) => (
                          <li className={style.branch_facility_list_item} key={index}>
                            {facility.icon}
                            <span>{facility.name}</span>
                          </li>
                        ))
                      }
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