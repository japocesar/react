import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

import { mapConfig, distanceCalculator } from '../helpers';

export const MapComponent = ({ cityName,  cityLatLng ,onPlaceMarker, gameOver }) => {

  const [isMarkerShown, setIsMarkerShown] = useState(false);
  const [isCityMarkerShown, setIsCityMarkerShown] = useState(false);
  const [markerPosition, setMarkerPosition] = useState({ lat: 52.50, lng: 13.2846501 });
  const [cityMarkerPosition, setCityMarkerPosition] = useState({ lat: 52.50, lng: 13.2846501 });
  const [distance, setDistance] = useState(0);

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  // const defaultProps = {
  //   center: {
  //     lat: 52.50,
  //     lng: 13.2846501
  //   },
  //   zoom: 14,
  // };

  const onMapClick = ({latLng}) => {
    setIsMarkerShown(true);
    setMarkerPosition(latLng);
    setCityMarkerPosition( cityLatLng );
  }

  const onPlace = () => {
    setIsCityMarkerShown(true);
    const fixMarkerPos = { lat: markerPosition.lat(), lng: markerPosition.lng() };
    const distancel = distanceCalculator( markerPosition.lat(), cityMarkerPosition.lat, markerPosition.lng(), cityMarkerPosition.lng );
    // console.log(`${distance} KM!`);
    setDistance(distancel);
  }

  const onNext = () => {
    setIsMarkerShown(false);
    setIsCityMarkerShown(false);
    setDistance(0);
    onPlaceMarker( distance );
  }

  return (
    <div className='container'>
        <h1>Found the City:</h1>
        <div className="alert alert-primary fs-1" role="alert">{ cityName }</div>

        <LoadScript
          googleMapsApiKey="AIzaSyBhqD5BcsPIUmky6_n7ZjoeiwB3mEGLqiY"
        >
          <GoogleMap
            center={{ lat: 52.50, lng: 13.2846501 }}
            mapContainerStyle={containerStyle}
            onLoad={map => {
              const bounds = new window.google.maps.LatLngBounds();
              map.fitBounds(bounds);
            }}
            options={{ styles: mapConfig, zoom: 5 }}
            onClick={ onMapClick }
          >
            <>
              { ( isCityMarkerShown ) ? <Marker position={ cityMarkerPosition } />: <></> }
              { ( isMarkerShown ) ? <Marker key='user' position={ markerPosition } /> : <></> }
            </>
          </GoogleMap>
        </LoadScript>

        <hr />
        {
          ( distance !== 0 && distance < 50 ) && (<div className="alert alert-primary" role="alert">Distance: { distance } KM</div>)
        }
        {
          ( distance !== 0 && distance > 50 ) && (<div className="alert alert-danger" role="alert">Distance: { distance } KM</div>)
        }

        { (isMarkerShown && !isCityMarkerShown && !gameOver) && (<button
          className='btn btn-primary'
          onClick={ onPlace }
        >
          Place
        </button>)}

        { (isCityMarkerShown && !gameOver) && (<button
          className='btn btn-primary'
          onClick={ onNext }
        >
          Next City
        </button>) }
    </div>
  )
}
