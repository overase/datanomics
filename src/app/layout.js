import { Poppins } from 'next/font/google';
import './tokens.css';
import './globals.css';
import './utilities.css';

import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { GoogleAnalytics } from './components/GoogleAnalytics';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '700']
});

export const metadata = {
  title: 'Datanomics Nigeria',
  description: 'Cheap hotels in lagos ondo akure isua ishua ugbek akoko parliament hotel ishua hotel ugbeh hotel nigeria',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Header />
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
