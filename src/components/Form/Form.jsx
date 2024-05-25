import { useState } from "react";
import Table from "../Table/TableData";

// component
import { CountrySelect, StateSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import ReactLoading from "react-loading";
import Layer from "../Layer";

export default function App() {
  const [countryid, setCountryid] = useState(0);
  const [countryName, setCountryName] = useState("");
  const [cityName, setcityName] = useState("");

  return (
    <>
      <Layer />
      <div className="w-full h-screen container mx-auto flex flex-col justify-center items-center">
        <form className="w-full flex justify-center items-center">
          <div className="w-[500px]">
            <div className="flex flex-col py-5 gap-2">
              <h6 className="text-3xl text-neutral-200">Country</h6>
              <CountrySelect
                onChange={(e) => {
                  setCountryid(e.id);
                  setCountryName(e.name);
                }}
                placeHolder="Select Country"
              />
            </div>

            <div className="flex flex-col py-5">
              <h6 className="text-3xl text-neutral-200">State</h6>
              <StateSelect
                countryid={countryid}
                onChange={(e) => {
                  setcityName(e.name);
                }}
                placeHolder="Select City"
              />
            </div>
          </div>
        </form>

        {countryName && cityName ? (
          <Table country={countryName} city={cityName} />
        ) : (
          <div className="h-full w-full flex justify-center items-center">
            <ReactLoading type="spinningBubbles" color="#fff" />
          </div>
        )}
      </div>
    </>
  );
}

// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",
