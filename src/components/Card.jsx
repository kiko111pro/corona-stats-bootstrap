import React, { useEffect, useState } from "react";
import "./style.css";
import NumberFormat from "react-number-format";
import axios from "axios";
import * as ReactBootstrap from 'react-bootstrap'

function Card(props) {

  const [globalStat, setGlobalStat] = useState({});
  const [loading, setLoading] = useState(false)

  async function fetchData() {
    await axios
      .get("https://api.covid19api.com/world/total")
      .then((res) => setGlobalStat(res.data));
      setLoading(true)
  }
  useEffect(() => {
    fetchData();
  }, []);

  const getDatafromHook = () => {
    if (props.id === "1") {
      return globalStat.TotalConfirmed;
    }
    if (props.id === "2") {
      return globalStat.TotalRecovered;
    }
    if (props.id === "3") {
      return globalStat.TotalDeaths;
    }
  };

  const border = () => {
    if (props.id === "1") {
      return "blue";
    } else if (props.id === "2") {
      return "green";
    } else if (props.id === "3") {
      return "red";
    }
  };

  return (
    <div className={`card my-3 ${border()}`} style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Worldwide</h6>

        <h3 className="card-text">
          {
            loading ? (<NumberFormat
              value={getDatafromHook()}
              displayType={"text"}
              thousandSeparator={true}
            />) : <ReactBootstrap.Spinner animation="border"  />
          }
        </h3>
      </div>
    </div>
  );
}

export default Card;
