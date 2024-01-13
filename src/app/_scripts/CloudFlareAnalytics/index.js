"use client"
import Script from "next/script";

const CloudFlareAnalytics = ({ token }) => {
  return (
    <>
      <Script
        async
        src={`https://static.cloudflareinsights.com/beacon.min.js`}
        data-cf-beacon={`{"token": ${token}}`}
        defer
      />
    </>
  );
};




export { CloudFlareAnalytics };