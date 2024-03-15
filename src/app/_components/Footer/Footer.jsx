import Link from 'next/link';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer_group}>
          <div className="col">
            <div className={style.footer_links}>
              <div className={style.footer_links_container}>
                <span className={style.footer_title}>Quick links</span>
                <ul className={style.quick_links}>
                  <li className={style.quick_links__item}>
                    <Link href="/" className={style.quick_links__link}>Home</Link>
                  </li>
                  <li className={style.quick_links__item}>
                    <Link href="/#" className={style.quick_links__link}>Branches</Link>
                  </li>
                  <li className={style.quick_links__item}>
                    <Link href="/contact" className={style.quick_links__link}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`col ${style.booking}`}>
              <div className={style.footer_links}>
                <span className={style.footer_title}>Booking</span>
                <ul className={style.quick_links}>
                  <li className={style.quick_links__item}>
                    08033323907
                  </li>
                  <li className={style.quick_links__item}>
                    08023284000
                  </li>
                </ul>
              </div>
            </div>
            <div className={`col ${style.booking}`}>
              <div className={style.footer_links}>
                <span className={style.footer_title}>Contact</span>
                <ul className={style.quick_links}>
                  <li className={style.quick_links__item}>
                    booking@datanomicsnigeria.com
                  </li>
                  <li className={style.quick_links__item}>
                    13, Unity Close, Opposite Ogudu Police Station, Off Ogudu Road, Ojota, Lagos
                  </li>
                </ul>
              </div>
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
