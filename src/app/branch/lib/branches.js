import { AiFillBulb } from "react-icons/ai";
import { BiSolidCctv } from "react-icons/bi";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaSatelliteDish } from "react-icons/fa6";
import { BiSolidFridge } from "react-icons/bi";
import { LuAirVent } from "react-icons/lu";

import IshuaHotelCorridor from "../../../../public/images/ishua_hotel_corridor.jpg";
import IshuaHoterlEnviron from "../../../../public/images/ishua_hotel_environ.jpg";
import IshuaRoom2 from "../../../../public/images/ishua_room_2.jpg";
import IshuaRoom4 from "../../../../public/images/ishua_room_4.jpg";
import IshuaRoyalSuite1 from "../../../../public/images/ishua_royal_suite_1.jpg";
import IshuaRoyalSuite2 from "../../../../public/images/ishua_royal_suite_2.jpg";
import IshuaStandardRoom from "../../../../public/images/ishua_standard_room_2.jpg";
import IshuaVip from "../../../../public/images/ishua_vip.jpg";
import Parliament1 from "../../../../public/images/parliament_1.jpg";
import Parliament4 from "../../../../public/images/parliament_4.jpg";
import Parliament5 from "../../../../public/images/parliament_5.jpg";
import Parliament6 from "../../../../public/images/parliament_6.jpg";
import Parliament10 from "../../../../public/images/parliament_10.jpg";
import Parliament12 from "../../../../public/images/parliament_12.jpg";
import Parliament11 from "../../../../public/images/parliament_11.jpg";
import Parliament15 from "../../../../public/images/parliament_room_15.jpg";
import Onipanu1 from "../../../../public/images/datanomic_onipanu_room.jpg";
import Onipanu2 from "../../../../public/images/parliament_hotel_room.jpg";
import Ugbeh from "../../../../public/images/ugbeh_1.jpg";
import Ogudu1 from "../../../../public/images/ogudu_hotel.jpg";
import OguduRoom from "../../../../public/images/ogudu_room.jpg";

import style from "../[slug]/page.module.css";

const branches = [
  {
    id: 1,
    name: "ogudu",
    slug: "ogudu",
    rooms: ["Standard", "Annex", "VIP", "Senate"],
    facilities: [
      {
        icon: <AiFillBulb className={style.fill} />,
        name: "24 hrs power supply"
      },
      {
        icon: <BiSolidCctv className={style.fill}  />,
        name: "Surveillance Cameras (CCTV)"
      },
      {
        icon: <PiTelevisionSimpleFill className={style.fill}  />,
        name: "Plasma Televsion"
      },
      {
        icon: <FaSatelliteDish className={style.fill}  />,
        name: "DSTV"
      },
      {
        icon: <BiSolidFridge className={style.fill}  />,
        name: "Bedroom Fridge"
      },
      {
        icon: <LuAirVent className={style.fill}  />,
        name: "Air Conditioning"
      },
    ],
    images: [
      {
        id: 1,
        url: Ogudu1,
        caption: '',
      },
      {
        id: 2,
        url: OguduRoom,
        caption: '',
      }
    ]
  },
  {
    id: 2,
    name: "onipanu",
    slug: "onipanu",
    rooms: ["Single", "Executive standard", "Royal suite", "Double twin", "Governor suite"],
    facilities: [
      {
        icon: <AiFillBulb className={style.fill} />,
        name: "24 hrs power supply"
      },
      {
        icon: <BiSolidCctv className={style.fill}  />,
        name: "Surveillance Cameras (CCTV)"
      },
      {
        icon: <PiTelevisionSimpleFill className={style.fill}  />,
        name: "Plasma Televsion"
      },
      {
        icon: <FaSatelliteDish className={style.fill}  />,
        name: "DSTV"
      },
      {
        icon: <BiSolidFridge className={style.fill}  />,
        name: "Bedroom Fridge"
      },
      {
        icon: <LuAirVent className={style.fill}  />,
        name: "Air Conditioning"
      },
    ],
    images: [
      {
        id: 1,
        url: Onipanu1,
        caption: ''
      },
      {
        id: 2,
        url: Onipanu2,
        caption: ''
      },
    ]
  },
  {
    id: 3,
    name: "Parliament",
    slug: "parliament",
    rooms: ["Single", "Executive VIP", "Governor suite", "Royal suite"],
    facilities: [
      {
        icon: <AiFillBulb className={style.fill} />,
        name: "24 hrs power supply"
      },
      {
        icon: <BiSolidCctv className={style.fill}  />,
        name: "Surveillance Cameras (CCTV)"
      },
      {
        icon: <PiTelevisionSimpleFill className={style.fill}  />,
        name: "Plasma Televsion"
      },
      {
        icon: <FaSatelliteDish className={style.fill}  />,
        name: "DSTV"
      },
      {
        icon: <BiSolidFridge className={style.fill}  />,
        name: "Bedroom Fridge"
      },
      {
        icon: <LuAirVent className={style.fill}  />,
        name: "Air Conditioning"
      },
    ],
    images: [
      {
        id: 1,
        url: Parliament1,
        caption: ''
      },
      {
        id: 3,
        url: Parliament4,
        caption: ''
      },
      {
        id: 4,
        url: Parliament5,
        caption: ''
      },
      {
        id: 5,
        url: Parliament6,
        caption: ''
      },
      {
        id: 6,
        url: Parliament10,
        caption: ''
      },
      {
        id: 7,
        url: Parliament11,
        caption: ''
      },
      {
        id: 8,
        url: Parliament12,
        caption: ''
      },
      {
        id: 9,
        url: Parliament15,
        caption: ''
      },
    ]
  },
  {
    id: 4,
    name: "ugbeh",
    slug: "ugbeh",
    rooms: ["Standard", "Executive vip"],
    facilities: [
      {
        icon: <AiFillBulb className={style.fill} />,
        name: "24 hrs power supply"
      },
      {
        icon: <BiSolidCctv className={style.fill}  />,
        name: "Surveillance Cameras (CCTV)"
      },
      {
        icon: <PiTelevisionSimpleFill className={style.fill}  />,
        name: "Plasma Televsion"
      },
      {
        icon: <FaSatelliteDish className={style.fill}  />,
        name: "DSTV"
      },
      {
        icon: <BiSolidFridge className={style.fill}  />,
        name: "Bedroom Fridge"
      },
      {
        icon: <LuAirVent className={style.fill}  />,
        name: "Air Conditioning"
      },
    ],
    images: [
      {
        id: 1,
        url: Ugbeh,
        caption: '',
      }
    ]
  },
  {
    id: 5,
    name: "ishua",
    slug: "ishua",
    rooms: ["Single", "Standard", "Executive", "VIP", "Royal suite 1", "Royal suite 2"],
    facilities: [
      {
        icon: <AiFillBulb className={style.fill} />,
        name: "24 hrs power supply"
      },
      {
        icon: <BiSolidCctv className={style.fill}  />,
        name: "Surveillance Cameras (CCTV)"
      },
      {
        icon: <PiTelevisionSimpleFill className={style.fill}  />,
        name: "Plasma Televsion"
      },
      {
        icon: <FaSatelliteDish className={style.fill}  />,
        name: "DSTV"
      },
      {
        icon: <BiSolidFridge className={style.fill}  />,
        name: "Bedroom Fridge"
      },
      {
        icon: <LuAirVent className={style.fill}  />,
        name: "Air Conditioning"
      },
    ],
    images: [
      {
        id: 1,
        url: IshuaHotelCorridor,
        caption: '',
      },
      {
        id: 2,
        url: IshuaHoterlEnviron,
        caption: '',
      },
      {
        id: 3,
        url: IshuaRoom2,
        caption: '',
      },
      {
        id: 4,
        url: IshuaRoom4,
        caption: '',
      },
      {
        id: 5,
        url: IshuaRoyalSuite1,
        caption: '',
      },
      {
        id: 6,
        url: IshuaRoyalSuite2,
        caption: '',
      },
      {
        id: 7,
        url: IshuaStandardRoom,
        caption: '',
      },
      {
        id: 8,
        url: IshuaVip,
        caption: '',
      },
    ]
  },
];

export { branches };
