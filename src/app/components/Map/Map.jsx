import { useEffect, useMemo, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = ({ position, name, subheading }) => {
  const mapRef = useRef(null);
  const mapOptions = useMemo(() => {
    return {
      center: {
        lat: position.lat,
        lng: position.lng
      },
      zoom: 18
    }
  }, [position]);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
      version: "weekly",
    });
    loader
      .importLibrary("maps")
      .then(({Map}) => {
        const map = new Map(mapRef.current, mapOptions);
        const infoWindow = new google.maps.InfoWindow();
        const marker = new google.maps.Marker({
          map: map,
          position: mapOptions.center,
          title: `${name} <br> ${subheading || ''}`,
          label: "H"
        });
        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });
      })
      .catch((e) => console.log(e))
  }, [mapOptions, name, subheading]);
  return (
    <div style={{ height: "100%", width: "100%" }} ref={mapRef} />
  );
}

export { Map };
