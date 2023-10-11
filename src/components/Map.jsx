import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import { useLocations } from "../context/Locations.context";
import { useNormal } from "../context/normalContext";

import ImageLoader from "./ImageLoader";

import PointIcon from "../assets/pointIcon.png";
import UserIcon from "../assets/userIcon.png";

function Map() {
  const { locations, liveLocation } = useLocations();
  const { setMobment } = useNormal();

  const userIcon = new L.Icon({
    iconUrl: UserIcon,
    iconSize: [40, 40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });
  const pointIcon = new L.Icon({
    iconUrl: PointIcon,
    iconSize: [40, 40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  return (
    <div className="bg-yellow-50 absolute top-0">
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

        {locations
          ? locations.map((point, i) => {
              if (point.coordinates.length != 2) return null;
              return (
                <Marker
                  icon={pointIcon}
                  key={i}
                  position={{
                    lat: point.coordinates[0],
                    lng: point.coordinates[1],
                  }}
                >
                  <Popup>
                    <div>
                      <ImageLoader
                        imageSrc={point.image}
                        name={point.name}
                        styles={"rounded-md"}
                      />
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
            })
          : null}

        {liveLocation ? (
          <Marker position={liveLocation} icon={userIcon}>
            <Popup>Yoy are here</Popup>
          </Marker>
        ) : null}
      </MapContainer>
    </div>
  );
}

export default Map;
