import { HorizontalLines } from "../HorizontalLines/HorizontalLines";
import style from "./About.module.css";

const About = () => {
  return (
    <section className={style.about}>
      <h1 className={`h1`}>About</h1>
      <HorizontalLines />
      <div className="container">
        <p className={style.about_text}>
          Datanomics Guest house nigeria is the most preferred hospitality bussiness conglomorate with all our hotels strategically located in two cities: datanomics Guest house ogudu located in the heart of ogudu G.R.A, Lagos state datanomics Guest house onipanu located along ikorodu and shielded from the hustle and bustle of Lagos metropolis,parliament hotel situated beside Ondo state house of assembly and Ishua hotel located in the heart of Akoko province.We offer our corporate clients and our walk in guests a perfect blend of relaxation,activities and African tradition delicately infused to meet the highest international standards. Our hotels are designed for your comfort and convenience. Your security,un-interrupted power supply is our primary concern and you will find our customer care is excellent. Our hotels has taken important steps to live up to Nigeria’s future model in the hospitality sector. With the best hall facilities for conference and events,tastefully furnished rooms,restaurants and bars serving a range of cuisines, amongst other facilities. We are passionate about serving and looking foward to having you. Welcome to Datanomics Guest House Nigeria.
        </p>
      </div>
    </section>
  );
};


export { About }