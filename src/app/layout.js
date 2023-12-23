import { Poppins } from 'next/font/google';
import './tokens.css';
import './globals.css';
import './utilities.css';

import { HeaderWrapper } from './components/Header/HeaderWrapper';
import { Footer } from './components/Footer/Footer';
import { GoogleAnalytics } from './components/GoogleAnalytics';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '700']
});

export const metadata = {
  title: {
    template: "%s - Datanomics Nigeria",
    default: "Datanomics Nigeria",
  },
  description: 'Cheap hotels in lagos ondo akure isua ishua ugbek akoko parliament hotel ishua hotel ugbeh hotel nigeria',
  keywords: ["hotel", "hotels", "hospitality",],
  authors: [{ name: "omoogun" }],
  openGraph: {
    title: "Datanomics Nigeria",
    description: 'Cheap hotels in lagos ondo akure isua ishua ugbeh akoko parliament hotel ishua hotel ugbeh hotel nigeria',
    url: 'https://www.datanomicsnigeria.com',
    siteName: 'Datanomics Nigeria',
    locale: 'en_US',
    type: 'website',
    authors: ["omoogun"]
  },
  bookmarks: ['https://www.datanomicsnigeria.com'],
  category: 'hospitality',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <HeaderWrapper />
        {children}
        <Footer />
        {
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID ? 
          <GoogleAnalytics id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID} /> :
          null
        }
      </body>
    </html>
  );
}
