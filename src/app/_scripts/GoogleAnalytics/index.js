"use client"
import Script from "next/script";

const GoogleAnalytics = ({ id }) => {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script id="gtag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', "${id}");
        `}
      </Script>
    </>
  );
};

export { GoogleAnalytics };