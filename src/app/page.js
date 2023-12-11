import { ImageSlider } from './components/ImageSlider/ImageSlider';
import { WhyUs } from './components/WhyUs/WhyUs';

import style from './page.module.css';

export default function Home() {
  return (
    <main>
      <div className={style.carousel}>
        <ImageSlider />
      </div>
      <WhyUs />
    </main>
  );
}
