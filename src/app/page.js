import { ImageSlider } from './components/ImageSlider/ImageSlider';
import { WhyUs } from './components/WhyUs/WhyUs';

import Ishua from "../../public/images/ishua_standard_room_2.jpg";
import Parliament from "../../public/images/parliament_12.jpg";
import GovernorRoom from "../../public/images/Governor.jpg";
import Building from "../../public/images/datanomics_guest_house.jpg";
import Ugbeh from "../../public/images/ugbeh_1.jpg";

import style from './page.module.css';

const slides = [
  {
    id: 1,
    url: Building,
    caption: "Datanomics Nigeria"
  },
  {
    id: 2,
    url: Ishua,
    caption: "Ishua Standard Room"
  },
  {
    id: 3,
    url: Parliament,
    caption: "Parliament Governor Suite"
  },
  {
    id: 4,
    url: GovernorRoom,
    caption: "Onipanu Governor Suite"
  },
  {
    id: 5,
    url: Ugbeh,
    caption: "Ugbeh VIP Suite"
  },
];

export default function Home() {
  return (
    <main>
      <div className={style.carousel}>
        <ImageSlider slides={slides} />
      </div>
      <WhyUs />
    </main>
  );
}
