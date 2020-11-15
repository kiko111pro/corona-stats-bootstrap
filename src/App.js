import React from "react";
import "./App.css";
import UserData from './components/UserData';
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <div className="d-flex container-fluid flex-wrap justify-content-around" id="card_section" >
        <Card title="Active Cases" id="1" />
        <Card title="Recovered" id="2" />
        <Card title="Deaths" id="3" />
      </div>
      <UserData />
    </div>
  );
}

export default App;
