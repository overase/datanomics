"use client";
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";
import { MdMenu, MdClose} from "react-icons/md";

import style from './Header.module.css';

function Header({ fixed, open, onToggle, whiteBackground }) {
  return (
    <header className={`${whiteBackground && style.bg_white} ${style.header} ${fixed && style.fixed}`}>
        <div className={style.header_contact}>
          <span className={style.phone}><FaPhoneAlt />{'  '}08033323907</span> {'  '}
          <span className={style.phone}>booking@datanomicsnigeria.com</span>
        </div>
        <nav className={style.nav}>
          <div className={style.logo_container}>
            <Link href="/" className={style.logo}>
              Datanomics Nigeria
            </Link>
          </div>
          {open ? (
              <button
                type="button"
                className={`icon icon-white ${style.close}`}
                onClick={onToggle}
              >
                <MdClose size={30} />
              </button>
            ): 
            (
              <button
                type="button"
                className={`icon icon-white ${style.menu}`}
                onClick={onToggle}
              >
                <MdMenu size={30} />
              </button>
            )
            }
          <ul className={`${style.nav_list} ${open && style.nav_list_mobile}`}>
            <li className={`${style.nav_item}`}>
              <Link href="/#about" className={`${style.nav_link} ${style.bg_link}`}>About</Link>
            </li>
            <li className={style.nav_item}>
              <button type="button" className={`${style.nav_link} ${style.bg_link}`}>
                Branches
              </button>
              <ul className={style.sub_nav_list}>
                <li className={`${style.sub_nav_list_item}`}>
                  <Link href="/branch/datanomics-guesthouse-ogudu" className={style.sub_nav_link}>Ogudu guesthouse</Link>
                </li>
                <li className={`${style.sub_nav_list_item}`}>
                  <Link href="/branch/datanomics-guesthouse-onipanu" className={style.sub_nav_link}>Onipanu guesthouse</Link>
                </li>
                <li className={`${style.sub_nav_list_item}`}>
                  <Link href="/branch/parliament-hotel" className={style.sub_nav_link}>Parliament hotel</Link>
                </li>
                <li className={`${style.sub_nav_list_item}`}>
                  <Link href="/branch/ishua-hotel" className={style.sub_nav_link}>Ishua hotel</Link>
                </li>
                <li className={`${style.sub_nav_list_item}`}>
                  <Link href="/branch/ugbeh-hotel" className={style.sub_nav_link}>Ugbeh hotel</Link>
                </li>
              </ul>
            </li>
            <li className={style.nav_item}>
              <Link href="/contact" className={`${style.nav_link} ${style.bg_link}`}>Contact</Link>
            </li>
            <li className={`${style.nav_item} ${style.phone_block}`}>
              <p className={style.phone}>Phone: 08033323907 </p>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export { Header };
