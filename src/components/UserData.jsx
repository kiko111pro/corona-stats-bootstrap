import React, { useState } from "react";
import "./style.css";
import axios from "axios";

function UserData() {
  const [countryData, setCountryData] = useState({});
  const [countryName, setCountryName] = useState("");

  const handleSubmit = () => {
    axios
      .get(`https://api.covid19api.com/total/country/${countryName}`)
      .then((res) => setCountryData([...res.data].pop()));
  };
  console.log(countryData);

  return (
    <div className="container mt-3">
      <h4>Get the Statistics of your Country</h4>
      <div className="container d-flex">
        <input
          className="form-control"
          placeholder="eg.. india or usa"
          value={countryName}
          onChange={(e) => {
            setCountryName(e.target.value);
          }}
        />
        <button className="btn btn-primary ml-3" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="container p-4">
        <ul className="list-group">
        <li className="list-group-item">COVID-19 Statistics for {countryData.Country}</li>

          <li className="list-group-item list-group-item-primary">
            Active Cases : {countryData.Active}
          </li>
          <li className="list-group-item list-group-item-secondary">
            Confirmed Cases : {countryData.Confirmed}
          </li>
          
          <li className="list-group-item list-group-item-success">
            Recovered Cases : {countryData.Recovered}
          </li>
          <li className="list-group-item list-group-item-danger">
            Deaths due to COVID-19 : {countryData.Deaths}
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default UserData;
