import React from "react";
import { useEffect, useState } from "react";
import { fetchCountries } from "./api";

const Countries = ({ handleCountryChange }) => {
  const [data, setData] = useState([]);
  const [currentCountry, setCurrentCountry] = useState("");
  let countries = [];

  //Pushing the country names in the empty array.
  const setCountries = async () => {
    data.map((obj) => countries.push(obj.country));
  };

  useEffect(() => {
    const fetchCountryApi = async () => {
      const countriesAll = await fetchCountries();
      setData(countriesAll);
    };
    fetchCountryApi();
  }, []);
  //Calling the function to push the country names in the array.
  setCountries();

  //Function to change the data to default if the search box is empty.
  const handleCountryInput = (e) => {
    if (e.target.value !== "") {
      setCurrentCountry(e.target.value);
    } else {
      setCurrentCountry("");
      handleCountryChange();
    }
  };

  //Fetching the API for specific country to get the Country's cases Chart.
  const getCountryChart = (e) => {
    e.preventDefault();
    if (currentCountry === "") {
      handleCountryChange();
    } else {
      handleCountryChange(currentCountry);
    }
  };

  return (
    <>
      <div className="container h-25">
        <h3 className="mx-auto">Countries</h3>

        <form className="d-flex justify-content-center">
          <label htmlFor="searchCountry" className="text-light mx-2"></label>
          <input
            className="form-control searchInput"
            onChange={handleCountryInput}
            type="search"
            value={currentCountry}
            id="searchCountry"
            placeholder="Search Your Country"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary mx-1"
            onClick={getCountryChart}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Countries;
