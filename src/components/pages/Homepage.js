import React from 'react';
import './Homepage.css';

const Homepage = () => (
  <div className="hero">
    <div className="select-region">
      <p>Select Region</p>
      <select>
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
        <h2>Region</h2>
        <span>countries</span>
        <div className="hero-back" />
      </div>
    </div>

    <section className="intro">
      <h5>STATS BY COUNTRY</h5>
      <div className="states">
        <div className="card">
          <h2>Country</h2>
          <p>Capital</p>
        </div>
        <div className="card">
          <h2>Country</h2>
          <p>Capital</p>
        </div>
        <div className="card">
          <h2>Country</h2>
          <p>Capital</p>
        </div>
        <div className="card">
          <h2>Country</h2>
          <p>Capital</p>
        </div>
      </div>
    </section>
  </div>
);

export default Homepage;
