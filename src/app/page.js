import { ImageSlider } from './_components/ImageSlider/ImageSlider';
import { Hotels } from './_components/Hotels/Hotels';
import { WhyUs } from './_components/WhyUs/WhyUs';
import { About } from './_components/About/About';

import style from './page.module.css';

export default function Home() {
  return (
    <>
      <section className={style.carousel}>
        <ImageSlider />
      </section>
      <About />
      <Hotels />
      <WhyUs />
    </>
  );
}
