import { Poppins } from 'next/font/google';
import Script from 'next/script';
import './tokens.css';
import './globals.css';
import './utilities.css';

import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '700']
});

export const metadata = {
  title: 'Datanomics Nigeria',
  description: 'Cheap hotels in lagos, isua akoko ugbeh akoko ondo state akure',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
 
            gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID});
          `}
      </Script>
      </body>
    </html>
  );
}
