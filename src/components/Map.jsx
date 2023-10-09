import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import { useLocations } from "../context/Locations.context";
import { useNormal } from "../context/normalContext";


function Map() {
  const { locations } = useLocations();
  const { setMobment } = useNormal();

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
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((point, i) => {
          if (point.coordinates.length != 2) return null;
          return (
            <Marker
              key={i}
              position={{
                lat: point.coordinates[0],
                lng: point.coordinates[1],
              }}
            >
              <Popup>
                <div>
                  <img src={point.image} alt={point.name} />
                  <span>{point.name}</span>
                  <p>{point.description}</p>
                  <Link
                    to={`point/${point._id}`}
                    onClick={() => {
                      setMobment(true);
                    }}
                  >
                    Conocer mas.
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
