import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import {Offers, OfferCity} from '../../types/offer';
import {useAppSelector} from '../../hooks';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../const/const';
import {getSelectPoint} from '../../store/offer-data/selectors';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  places: Offers;
  currentOffer?: OfferCity | null;
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

function Map({places, currentOffer}: MapProps) {

  let selectedPoint = useAppSelector(getSelectPoint);

  const offerCities = places.map((place) => {
    const obj = {
      name: place.city.name,
      latitude: place.city.location.latitude,
      longitude: place.city.location.longitude,
      zoom: place.city.location.zoom,
    };
    return obj;
  });

  let offerPins = places.map((place) => {
    const obj = {
      id: place.id,
      lat: place.location.latitude,
      lng: place.location.longitude,
    };
    return obj;
  });

  if (currentOffer) {
    offerPins = [...offerPins, {
      id: currentOffer.id,
      lat: currentOffer.location.latitude,
      lng: currentOffer.location.longitude,
    }];

    selectedPoint = currentOffer.id;
  }

  const city = offerCities[0];

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offerPins.forEach((point) => {
        map.setView({
          lat: city.latitude,
          lng: city.longitude
        });
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker
          .setIcon(
            point.id === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);

      });

    }
  }, [map, offerPins, selectedPoint, city]);

  return (
    <div className='cities__map map'
      ref={mapRef}
      style={{height: 'inherit'}}
    >
    </div>
  );
}

export default Map;
