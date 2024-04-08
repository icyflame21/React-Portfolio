import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import mapMarkerIcon from "../../assets/img/designs/map-marker.png";

const LeafletMap = ({ data, position, ...rest }) => {
  const mapMarker = L.icon({
    iconUrl: mapMarkerIcon,
  });

  return (
    <MapContainer
      zoom={13}
      minZoom={11}
      center={position}
      radius={200}
      fadeAnimation
      scrollWheelZoom={false}
      {...rest}
    >
      <TileLayer
        attribution={null}
        url={
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        }
      />
      <Marker position={[data.lat, data.long]} icon={mapMarker}>
        <Popup>
          <h1 className="fs-0 text-black">{data.name}</h1>
          <p className="m-0 gray1">
            {data.street}
            <span className="info">{data.location}</span>
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
