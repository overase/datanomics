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
        url: "ogudu_hotel.jpg",
        caption: '',
        alt: "ogudu hotel"
      },
      {
        id: 2,
        url: "ogudu_room.jpg",
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
        url: "datanomic_onipanu_room.jpg",
        caption: '',
        alt: "onipa hotelnu"
      },
      {
        id: 2,
        url: "parliament_hotel_room.jpg",
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
        url: "parliament_1.jpg",
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 3,
        url: "parliament_4.jpg",
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 4,
        url: "parliament_5.jpg",
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 5,
        url: "parliament_6.jpg",
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 6,
        url: "parliament_10.jpg",
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 7,
        url: "parliament_11.jpg",
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 8,
        url: "parliament_12.jpg",
        caption: '',
        alt: "parli hotelament"
      },
      {
        id: 9,
        url: "parliament_15.jpg",
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
        url: "ishua_standard_room_2.jpg",
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 2,
        url: "ishua_hotel_environ.jpg",
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 3,
        url: "ishua_room_2.jpg",
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 4,
        url: "ishua_room_4.jpg",
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 5,
        url: "ishua_royal_suite_1.jpg",
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 6,
        url: "ishua_royal_suite_2.jpg",
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 7,
        url: "ishua_hotel_corridor.jpg",
        caption: '',
        alt: "ishua hotel"
      },
      {
        id: 8,
        url: "ishua_vip.jpg",
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
        url: "ugbeh_1.jpg",
        caption: '',
        alt: "ugbeh hotel"
      }
    ]
  },
];

export { branches };
