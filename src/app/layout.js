export const runtime = "edge";

import './_ui/tokens.css';
import './_ui/utilities.css';
import './_ui/globals.css';

import { lora, hiragino, gilroyBold, gilroyMedium, gilroyRegular } from './_ui/fonts/fonts';

import { HeaderWrapper } from './_components/Header/HeaderWrapper';
import { Footer } from './_components/Footer/Footer';
import { GoogleAnalytics } from './_scripts/GoogleAnalytics';
import { CloudFlareAnalytics } from './_scripts/CloudFlareAnalytics';

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
    <html lang="en">
      <body className={
        `${lora.variable} ${hiragino.variable} ${gilroyBold.variable} ${gilroyRegular.variable} ${gilroyMedium.variable}`
        }>
        <HeaderWrapper />
        {children}
        <Footer />
        {
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID ? 
          <GoogleAnalytics id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID} /> :
          null
        }
        {
          process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN ? 
          <CloudFlareAnalytics token={process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN} /> :
          null
        }
      </body>
    </html>
  );
}
