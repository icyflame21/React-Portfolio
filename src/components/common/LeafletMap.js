import React, { useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import PropTypes from 'prop-types';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import '../../CSS/GradientText.css'
import mapMarkerIcon from 'assets/img/designs/map-marker.png';

const mapMarker = L.icon({
  iconUrl: mapMarkerIcon
});

const LayerComponent = ({ data }) => {
  const map = useMap();

  useEffect(() => {
    if (map) {
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: null,
          transparent: true,
        }
      )
        .addTo(map);
    }
  }, []);

  return (
    <>
      <TileLayer
        attribution={null}
        url={'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'}
      />
<MarkerClusterGroup chunkedLoading={true} spiderfyOnMaxZoom={false}>
        {data.map(marker => (
      <Marker
        key={marker.id}
            position={[marker.lat, marker.long]}
        icon={mapMarker}
      >
        <Popup>
          <h1 className="fs-0 text-black">{marker.name}</h1>
          <p className="m-0 gray1">
            {marker.street}<span className='info'>{marker.location}</span>
          </p>
        </Popup>
      </Marker>
))}
      </MarkerClusterGroup>
    </>
  );
};

const LeafletMap = ({ data, position, ...rest }) => {

  return (
    <MapContainer
      zoom={13}
      minZoom={11}
      zoomSnap={0.5}
      center={position}
      {...rest}
      radius={200}
    >
      <LayerComponent data={data} />
    </MapContainer>
  );
};

LeafletMap.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      long: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      street: PropTypes.string,
      location: PropTypes.string
    })
  )
};

LayerComponent.propTypes = {
  data: LeafletMap.propTypes.data
};

export default LeafletMap;
