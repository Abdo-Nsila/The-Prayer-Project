import { useState } from "react";
import Table from "../Table/TableData";

import { CountrySelect, StateSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import ReactLoading from "react-loading";

import "./Form.css";

export default function App() {
  const [countryid, setCountryid] = useState(0);
  const [countryName, setCountryName] = useState("");
  const [cityName, setcityName] = useState("");

  return (
    <>
      <form>
        <h6>Country</h6>
        <CountrySelect
          onChange={(e) => {
            setCountryid(e.id);
            setCountryName(e.name);
          }}
          placeHolder="Select Country"
        />
        <h6>State</h6>
        <StateSelect
          countryid={countryid}
          onChange={(e) => {
            setcityName(e.name);
          }}
          placeHolder="Select City"
        />
      </form>

      {countryName && cityName ? (
        <Table country={countryName} city={cityName} />
      ) : (
        <div className="box">
          <ReactLoading type="spinningBubbles" color="#fff" />
        </div>
      )}
    </>
  );
}

// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",
