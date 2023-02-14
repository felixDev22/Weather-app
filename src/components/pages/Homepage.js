import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from '../country/Country';
import { getLocation } from '../../redux/countryApi';
import './Homepage.css';

const Countries = () => {
  const [currentRegion, setCurrentRegion] = useState('Africa');

  const data = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const { region, countries } = data;

  const regionHandler = (e) => {
    setCurrentRegion(e.target.value);
  };

  useEffect(() => {
    dispatch(getLocation(currentRegion));
  }, [dispatch, currentRegion]);

  return (
    <div className="hero">
      <div className="select-region">
        <p>Select Region</p>
        <select value={currentRegion} onChange={regionHandler}>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="row">
        <div className="title">
          <h2>{region.name}</h2>
          <span>{`Countries: (${region.totalCountries})`}</span>
          <p>Weather update</p>
          <div className="hero-back" />
        </div>
      </div>

      <section className="intro">
        <h5>STATS BY COUNTRY</h5>
        <div className="states">
          {countries.map((country) => (
            <Country
              key={country.id}
              name={country.name}
              capital={country.capital || country.name}
              flag={country.flag}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Countries;
