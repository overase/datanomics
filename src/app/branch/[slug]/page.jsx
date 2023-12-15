"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { MdCircle } from "react-icons/md";

import { branches } from "../lib/branches";

import { ImageSlider } from "@/app/components/ImageSlider/ImageSlider";
import { HorizontalLines } from "@/app/components/HorizontalLines/HorizontalLines";
import style from './page.module.css';

export default function Page({ params: { slug } }) {
  const branch = branches.find((branch) => slug === branch.slug);
  const Map = useMemo(() => dynamic(
    () => import('../../components/Map/Map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), []);
  return (
    <main>
      <section>
        <div className="container">
          <div className={style.branch_content}>
            <h1 className={`h1 ${style.branch_title}`}>
              {branch.name}
              <br />
              {branch?.subheading && branch?.subheading}
            </h1>
            <div className={style.branch_body}>
              <HorizontalLines />
              <div className="container">
                <div className={style.branch_room_slides}>
                  <ImageSlider slides={branch.images} />
                </div>
                <div className={style.branch_details}>
                  <div className={style.branch_room}>
                    <h3 className={`h3 ${style.available_room}`}>Available rooms</h3>
                    <ul className={style.branch_room_list}>
                      {
                        branch.rooms.map((room, index) => (
                          <li className={style.branch_room_list_item} key={index}>
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
            <Map lat={branch.location.lat} lng={branch.location.lng} />
          </div>
        </div>
      </section>
      <section className={style.map}>
        <Map
          position={[branch.location.lat, branch.location.lng]}
          name={branch.name}
          subheading={branch?.subheading}
        />
      </section>
    </main>
  );
}