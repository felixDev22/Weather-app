import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getWeather } from '../../redux/weatherApi';

import './Details.css';

const Details = () => {
  const weather = useSelector((state) => state.weather.weather);
  const countries = useSelector((state) => state.countries.countries);
  const { coutryName } = useParams();
  const dispatch = useDispatch();

  const country = countries.find((country) => country.name === coutryName);

  useEffect(() => {
    if (country) {
      dispatch(getWeather({ lat: country.lat, lon: country.lon }));
    }
  }, [dispatch, country]);

  if (country && weather.name) {
    return (
      <>
        <div className="details-hero">
          <div className="title">
            <h2>{weather.name}</h2>
            <h3>{weather.description}</h3>
            <p>Current weather</p>
          </div>
        </div>
        <div>
          {weather.loading && <h1>Loading...</h1>}
          {!weather.loading && weather.error ? (
            <div>
              Error:
              {weather.error}
            </div>
          ) : null}
          {!weather.loading && weather.weather ? (
            <div className="weather-info">
              <div className="info">
                <div className="d-card">
                  <h4 className="title">Humidity</h4>
                  <h3>{weather[0].humidity}</h3>
                </div>

                <div className="d-card">
                  <h4 className="title">Pressure</h4>
                  <h3>{weather[0].pressure}</h3>
                </div>

                <div className="d-card">
                  <h4 className="title">Temp Min</h4>
                  <h3>{weather[0].temp_min}</h3>
                </div>

                <div className="d-card">
                  <h4 className="title">Temp Max</h4>
                  <h3>{weather.temp_max}</h3>
                </div>

                <div className="d-card">
                  <h4 className="title">Feels Like</h4>
                  <h3>{weather[0].wind}</h3>
                </div>

                <div className="d-card">
                  <h4 className="title">Wind</h4>
                  <h3>{weather[0].wind}</h3>
                </div>

                <div className="d-card">
                  <h4 className="title">Visibility</h4>
                  <h3>{weather[0].visibility}</h3>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </>
    );
  }

  return <div className="container" />;
};

export default Details;
