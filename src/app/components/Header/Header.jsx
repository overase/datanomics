"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMenu, MdClose} from "react-icons/md";

import style from './Header.module.css';

export default function Header() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [fixed, setFixed] = useState(false);
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  const onFixed = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setFixed(true) : setFixed(false);
    }
  }

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => {
      if (e.matches && open) {
        setOpen(false);
      }
    });
  }, [open]);

  useEffect(() => {
    window.addEventListener('scroll', onFixed);
    return () => window.removeEventListener('scroll', onFixed);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, searchParams]);
  return (
    <header className={`${style.header} ${fixed && style.fixed}`}>
      <div className={style.header_contact}>
        <span><FaPhoneAlt />{'  '}08033323907</span> {'  '}
        <span>booking@datanomicsnigeria.com</span>
      </div>
      <nav className={style.nav}>
        <div className={style.logo_container}>
          <Link href="/#" className={style.logo}>
            Datanomics Nigeria
          </Link>
          <button
            type="button"
            className={style.menu}
            onClick={onToggle}
          >
            <MdMenu size={30} />
          </button>
        </div>
        {open && (
            <button
              type="button"
              className={style.close}
              onClick={onToggle}
            >
              <MdClose size={30} />
            </button>
          )}
        <ul className={`${style.nav_list} ${!open && style.none}`}>
          <li className={style.nav_item}>
            <Link href="#about" className={style.nav_link}>About</Link>
          </li>
          <li className={style.nav_item}>
            <button type="button" className={style.nav_link}>
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
            <Link href="/contact" className={style.nav_link}>Contact</Link>
          </li>
          <li className={`${style.nav_item} ${style.phone_block}`}>
            <p className={style.phone}>Phone: 08033323907 </p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
