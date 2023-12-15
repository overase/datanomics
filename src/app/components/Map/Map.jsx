import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const Map = ({ position, name, subheading }) => {
  return (
    <MapContainer
      style={{ height: '100%', width: '100%' }}
      center={position} zoom={20} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <span
            style={{
              fontSize: "2em",
              textAlign: "center"
            }}
          >
            {name} <br /> {subheading || ''}
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
