import {
  AiFillBulb,
  BiSolidCctv,
  PiTelevisionSimpleFill,
  FaSatelliteDish,
  BiSolidFridge,
  LuAirVent,
  MdLocalBar,
  IoMdRestaurant
} from "@/app/_ui/icons/icons";

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
    name: "Datanomics",
    subheading: "ogudu guesthouse",
    slug: "datanomics-guesthouse-ogudu",
    rooms: ["Standard", "Annex", "VIP", "Senate"],
    link: "/branch/datanomics-guesthouse-ogudu",
    location: {
      lat: 6.581770446624733,
      lng: 3.385919266832977
    },
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
        alt: "ogudu hotel"
      },
      {
        id: 2,
        url: OguduRoom,
        caption: '',
        alt: "ogudu hotel"
      }
    ]
  },
  {
    id: 2,
    name: "Datanomics",
    subheading: "onipanu guesthouse",
    slug: "datanomics-guesthouse-onipanu",
    rooms: ["Single", "Executive standard", "Royal suite", "Double twin", "Governor suite"],
    link: "/branch/datanomics-guesthouse-onipanu",
    location: {
      lat: 6.5370591978876496,
      lng: 3.3682871668326397
    },
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
      {
        icon: <MdLocalBar className={style.fill} />,
        name: "Bar",
      },
      {
        icon: <IoMdRestaurant className={style.fill} />,
        name: "Restaurant"
      }
    ],
    images: [
      {
        id: 1,
        url: Onipanu1,
        caption: '',
        alt: "onipa hotelnu"
      },
      {
        id: 2,
        url: Onipanu2,
        caption: '',
        alt: "onipa hotelnu"
      },
    ]
  },
  {
    id: 3,
    name: "Parliament",
    type: "Hotel",
    slug: "parliament-hotel",
    rooms: ["Single", "Executive VIP", "Governor suite", "Royal suite"],
    link: "/branch/parliament-hotel",
    location: {
      lat: 7.236438730252321,
      lng: 5.223838838003068
    },
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
      {
        icon: <MdLocalBar className={style.fill} />,
        name: "Bar",
      },
      {
        icon: <IoMdRestaurant className={style.fill} />,
        name: "Restaurant"
      }
    ],
    images: [
      {
        id: 1,
        url: Parliament1,
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 3,
        url: Parliament4,
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 4,
        url: Parliament5,
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 5,
        url: Parliament6,
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 6,
        url: Parliament10,
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 7,
        url: Parliament11,
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 8,
        url: Parliament12,
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 9,
        url: Parliament15,
        caption: '',
        alt: "parliament hotel"
      },
    ]
  },
  {
    id: 4,
    name: "Ishua",
    type: "Hotel",
    slug: "ishua-hotel",
    link: "/branch/ishua-hotel",
    rooms: ["Single", "Standard", "Executive", "VIP", "Royal suite 1", "Royal suite 2"],
    location: {
      lat: 7.449359392011563,
      lng: 5.9086481489433655
    },
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
      {
        icon: <MdLocalBar className={style.fill} />,
        name: "Bar",
      },
      {
        icon: <IoMdRestaurant className={style.fill} />,
        name: "Restaurant"
      }
    ],
    images: [
      {
        id: 1,
        url: IshuaStandardRoom,
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 2,
        url: IshuaHoterlEnviron,
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 3,
        url: IshuaRoom2,
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 4,
        url: IshuaRoom4,
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 5,
        url: IshuaRoyalSuite1,
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 6,
        url: IshuaRoyalSuite2,
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 7,
        url: IshuaHotelCorridor,
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 8,
        url: IshuaVip,
        caption: '',
        alt: "ishua hotel"
      },
    ]
  },
  {
    id: 5,
    name: "Ugbeh",
    type: "Hotel",
    slug: "ugbeh-hotel",
    rooms: ["Standard", "Executive vip"],
    link: "/branch/ugbeh-hotel",
    location: {
      lat: 7.525072203466108,
      lng: 5.7669265956769316
    },
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
      {
        icon: <MdLocalBar className={style.fill} />,
        name: "Bar",
      },
      {
        icon: <IoMdRestaurant className={style.fill} />,
        name: "Restaurant"
      }
    ],
    images: [
      {
        id: 1,
        url: Ugbeh,
        caption: '',
        alt: "ugbeh hotel"
      }
    ]
  },
];

export { branches };
