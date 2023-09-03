import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet.tilelayer.colorfilter';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import AppContext from 'context/Context';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import mapMarkerIcon from 'assets/img/designs/map-marker.png';

const mapMarker = L.icon({
  iconUrl: mapMarkerIcon
});

const LayerComponent = ({ data }) => {
  const map = useMap();
  const { config } = useContext(AppContext);

  const { isDark } = config;
  const filter = isDark
    ? [
      'invert:98%',
      'grayscale:69%',
      'bright:89%',
      'contrast:111%',
      'hue:205deg',
      'saturate:1000%'
    ]
    : ['bright:101%', 'contrast:101%', 'hue:23deg', 'saturate:225%'];

  useEffect(() => {
    map.invalidateSize();
  }, [config]);

  useEffect(() => {
    if (map) {
      L.tileLayer
        .colorFilter(
          'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
          {
            attribution: null,
            transparent: true,
            filter: filter
          }
        )
        .addTo(map);
    }
  }, [isDark]);

  return (
    <>
      <TileLayer
        attribution={null}
        url={'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'}
      />
      <MarkerClusterGroup chunkedLoading={true} spiderfyOnMaxZoom={false}>
        {data.map(marker => (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.long]}
            icon={mapMarker}
          >
            <Popup>
              <h1 className="fs-0 text-youtube">{marker.name}</h1>
              <p className="m-0 text-900">
                {marker.street}<span className='text-twitter'>{marker.location}</span>
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
