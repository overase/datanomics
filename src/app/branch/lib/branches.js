import { AiFillBulb } from "react-icons/ai";
import { BiSolidCctv } from "react-icons/bi";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaSatelliteDish } from "react-icons/fa6";
import { BiSolidFridge } from "react-icons/bi";
import { LuAirVent } from "react-icons/lu";

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
      ]
  },
  {
    id: 1,
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
      ]
  },
  {
    id: 1,
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
    ]
  },
  {
    id: 1,
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
    ]
  },
  {
    id: 1,
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
      ]
  },
];

export { branches };
