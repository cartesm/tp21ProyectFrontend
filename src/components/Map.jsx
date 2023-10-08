import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useLocations } from "../context/Locations.context";

function Map() {
  const { locations } = useLocations();

  return (
    <div className="bg-yellow-50">
      <MapContainer
        center={{ lat: -35.8513233, lng: -71.5876463 }}
        zoom={13}
        scrollWheelZoom={true}
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((point, i) => {
          <Marker
            key={i}
            position={{ lat: point.coordinates[0], lng: point.coordinates[1] }}
          />;
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
