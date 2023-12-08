import Link from 'next/link';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer_group}>
          <div className="col">
            <h4 className={`h4 ${style.mb_2} ${style.white_heading}`}>Quick links</h4>
            <ul className={style.quick_links}>
              <li className={style.quick_links__item}>
                <Link href="/#" className={style.quick_links__link}>Home</Link>
              </li>
              <li className={style.quick_links__item}>
                <Link href="/#" className={style.quick_links__link}>Branches</Link>
              </li>
              <li className={style.quick_links__item}>
                <Link href="/#" className={style.quick_links__link}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className={`col ${style.booking}`}>
            <h4 className={`h4 ${style.white_heading} ${style.mb_2}`}>Booking</h4>
            <p className="text-white">08033323907</p>
            <p className="text-white">08023284000</p>
          </div>
          <div className={`col ${style.contact}`}>
            <h4 className={`h4 ${style.white_heading} ${style.mb_2}`}>Contact</h4>
            <p className="text-white">
              booking@datanomicsnigeria.com
            </p>
            <p className="text-white">
              13, Unity Close, Opposite Ogudu Police Station, Off Ogudu Road, Ojota, Lagos
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={style.copyright}>
          <p className={style.copyright_text}><span>&copy;</span> {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
};

export { Footer };
