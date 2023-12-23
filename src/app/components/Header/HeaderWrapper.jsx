"use client";

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Header } from './Header';

function HeaderWrapper() {
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
    <Header fixed={fixed} open={open} onToggle={onToggle} />
  );
};

export { HeaderWrapper };
