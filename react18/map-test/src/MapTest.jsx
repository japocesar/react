import { useState } from "react";
import { MapComponent, ScoreComponent } from "./components";

import { capitalCities } from './helpers';

export const MapTest = () => {

  const [cityIndex, setCityIndex] = useState(0);
  const [cityName, setCityName] = useState(capitalCities[0].capitalCity);
  const [latLng, setLatLng] = useState({ lat: capitalCities[0].lat, lng: capitalCities[0].long });
  const [score, setScore] = useState(1500);
  const [cityCounter, setCityCounter] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const onUpdateIndex = ( distance ) => {
    try {
      if ( distance > 50 ) {
        const currentScore = (score - distance).toFixed(2);
        setScore( currentScore );
        if( currentScore <= 0 ) {
          setGameOver(true);
          setScore(0);
        }
      } else {
        setCityCounter( cityCounter + 1 );
      }

      setCityIndex(cityIndex+1);
      setCityName( capitalCities[cityIndex+1].capitalCity );
      setLatLng({ lat: capitalCities[cityIndex+1].lat, lng: capitalCities[cityIndex+1].long });
    }
    catch (e) {
      setGameOver(true);
    }
  }

  return (
    <div className="container">
        <h1>MapTest</h1>
        <hr />
        <div className="row">
            <div className="col-12 col-md-4">
                <ScoreComponent cityIndex={ cityIndex } score={ score } cityCounter={cityCounter} gameOver={ gameOver }/>
            </div>
            <div className="col-12 col-md-8 mt-5 mt-md-0">
                <MapComponent cityName={cityName} cityLatLng={ latLng } onPlaceMarker={ onUpdateIndex }  gameOver={ gameOver }   />
            </div>
        </div>
    </div>
  )
}
