import React from 'react';
import './Details.css';

const Details = () => (
  <>
    <div className="details-hero">
      <div className="title">
        <h2>Name</h2>
        <h3>description</h3>
      </div>
    </div>
    <div className="weather-info">
      <div className="info">
        <div className="d-card">
          <h4 className="title">Humidity</h4>
          <h3>36</h3>
        </div>

        <div className="d-card">
          <h4 className="title">Pressure</h4>
          <h3>125</h3>
        </div>

        <div className="d-card">
          <h4 className="title">Temperature</h4>
          <h3>42</h3>
        </div>

        <div className="d-card">
          <h4 className="title">Wind</h4>
          <h3>25</h3>
        </div>
      </div>
    </div>
  </>
);

export default Details;
