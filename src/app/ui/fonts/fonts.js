import { Lora } from 'next/font/google';
import localFont from 'next/font/local';

export const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: "swap"
});

export const hiragino = localFont({
  src: "./Hiragino-Mincho-Pro/Hiragino-Mincho-Pro-W6.otf",
  variable: "--font-hiragino"
});

export const gilroyMedium = localFont({
  src: "./gilroy/Gilroy-Medium.ttf",
  variable: "--font-gilroy-medium"
});

export const gilroyRegular = localFont({
  src: "./gilroy/Gilroy-Regular.ttf",
  variable: "--font-gilroy-regular"
});
export const gilroyBold = localFont({
  src: "./gilroy/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold"
});
