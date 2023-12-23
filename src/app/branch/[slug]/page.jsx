import { MdCircle } from "react-icons/md";

import { branches } from "../lib/branches";

import { ImageSlider } from "@/app/components/ImageSlider/ImageSlider";
import { HorizontalLines } from "@/app/components/HorizontalLines/HorizontalLines";

import { Map } from "@/app/components/Map/Map";
import style from './page.module.css';

export async function generateMetadata({ params }, parent) {
  const slug = params.slug
 
  const branch = branches.find((branch) => slug === branch.slug);
 
  const previousOg = (await parent).openGraph;
 
  return {
    title: branch.name,
    openGraph: {
      ...previousOg,
      title: `${branch.name} Datanomics Nigeria`,
      url: `https://www.datanomicsnigeria.com${branch.link}`,
    },
  }
}

export default function Page({ params: { slug } }) {
  const branch = branches.find((branch) => slug === branch.slug);
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
            <HorizontalLines />
            <div className={style.branch_body}>
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
          </div>
        </div>
      </section>
      <section className={style.map}>
        <Map
          position={branch.location}
          name={branch.name}
          subheading={branch?.subheading}
        />
      </section>
    </main>
  );
}