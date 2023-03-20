import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { City, Points } from '../../types/offer';
import { URL_MARKER_DEFAULT } from '../const/const';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Points;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps) {
  const {city, points} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            defaultCustomIcon
          )
          .addTo(map);

      });
    }
  }, [map, points]);

  return (
    <div
      style={{height: '866px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
