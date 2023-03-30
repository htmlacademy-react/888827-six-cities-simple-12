import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { OfferCity, Offers } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const/const';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  places: Offers;
  selectedPoint: OfferCity | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({places, selectedPoint }: MapProps) {

  const offerCity = places.map((place) => {
    const obj = {
      name: place.city.name,
      latitude: place.city.location.latitude,
      longitude: place.city.location.longitude,
      zoom: place.city.location.zoom,
    };
    return obj;
  });

  // const offerPins = places.map((place, index) => {
  //   const obj = {
  //     id: index,
  //     lat: place.location.latitude,
  //   };
  //   return obj;
  // });

  const city = offerCity[0];

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      // map.setView({
      //   lat: city.latitude,
      //   lng: city.longitude
      // });

      places.forEach((point) => {

        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);

      });
    }
  }, [map, places, selectedPoint, city]);

  return (
    <div className='cities__map map'
      ref={mapRef}
      style={{height: 'inherit'}}
    >
    </div>
  );
}

export default Map;
