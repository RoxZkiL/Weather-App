import React from "react";

const WeatherForm = ({ getWeather }) => {
  return (
    <div className="card card-body">
      <div className="card-body text-success">
        <h5 className="card-title">WEATHER APP BY: JESUS MATUTE</h5>
        <p className="card-text">
          Project made in Javascript with REACT, HTML, CSS, BOOSTRAP, NODEJS &
          EXPRESS!!
        </p>
      </div>
      <form onSubmit={getWeather}>
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="Your City Name"
            className="form-control"
            autoFocus
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="Your Country Name"
            className="form-control"
          />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-success btn-block">Get Weather</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherForm;
