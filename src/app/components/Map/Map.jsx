"use client"
import { useEffect, useRef } from "react";
import { Loader } from '@googlemaps/js-api-loader';

const Map = ({ lat, lng }) => {
  const mapRef = useRef();

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
      version: "weekly",
    });

    loader
      .importLibrary('maps')
      .then(({Map}) => {
        new Map(mapRef.current, {
          center: {
            lat,
            lng
          },
          zoom: 8
        });
      })
      .catch((e) => {
      // do something
      console.log(e)
    });
  }, [lat, lng]);
  return (
    <div style={{ height: "400px" }} ref={mapRef}>

    </div>
  );
};

export { Map }