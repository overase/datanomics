"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MdMenu, MdClose} from "react-icons/md";

import style from './Header.module.css';

export default function Header() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => {
      if (e.matches && open) {
        setOpen(false);
      }
    });
  }, [open]);
  return (
    <header className={style.header}>
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
            <Link href="/#" className={style.nav_link}>About</Link>
          </li>
          <li className={style.nav_item}>
            <Link href="/#" className={style.nav_link}>Branches</Link>
          </li>
          <li className={style.nav_item}>
            <Link href="/contact" className={style.nav_link}>Contact</Link>
          </li>
          <li className={`${style.nav_item} ${style.phone_block}`}>
            <p className={style.phone}>Phone: 08030742164 </p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
