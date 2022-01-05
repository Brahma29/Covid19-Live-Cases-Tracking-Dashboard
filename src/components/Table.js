import React from "react";
import { useState, useEffect } from "react";
// import TableItem from './TableItem'
import { fetchCountries } from "./api";

const Table = () => {
  const [data, setData] = useState([]);
  const [sortingFlag, setsortingFlag] = useState(false);

  //Fetching the countries data
  useEffect(() => {
    const fetchCountryApi = async () => {
      const countriesAll = await fetchCountries();
      setData(countriesAll);
    };
    fetchCountryApi();
  }, []);

  //Sorting the data, If in ascending order then sorting it in descending or vice-versa.
  const sortCovidData = (col) => {
    if (sortingFlag === false) {
      const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setData(sorted);
      setsortingFlag(true);
    }
    if (sortingFlag === true) {
      const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setData(sorted);
      setsortingFlag(false);
    }
  };

  return (
    <div className="container">
      <h2 className="text-light d-flex justify-content-center my-5">
        Countries
      </h2>
      <table className="table">
        <thead>
          <tr className="text-light">
            <th
              scope="col"
              onClick={() => sortCovidData("country")}
              style={{ cursor: "pointer" }}
            >
              Country
            </th>
            <th
              scope="col"
              onClick={() => sortCovidData("active")}
              style={{ cursor: "pointer" }}
              className="text-primary"
            >
              Active{" "}
              {sortingFlag ? <span>&#8593; </span> : <span> &#8595; </span>}
            </th>
            <th
              scope="col"
              className="text-success"
              onClick={() => sortCovidData("recovered")}
              style={{ cursor: "pointer" }}
            >
              Recovered{" "}
              {sortingFlag ? <span>&#8593; </span> : <span> &#8595; </span>}
            </th>
            <th
              scope="col"
              className="text-danger"
              onClick={() => sortCovidData("deaths")}
              style={{ cursor: "pointer" }}
            >
              Deaths{" "}
              {sortingFlag ? <span>&#8593; </span> : <span> &#8595; </span>}
            </th>
          </tr>
        </thead>
        {/*Mapping the country data in the table*/}
        {data.map((data, i) => (
          <tbody key={i}>
            <tr className="text-light">
              <td className="text-light">{data.country}</td>
              <td className="text-light">{data.active}</td>
              <td className="text-light">{data.recovered}</td>
              <td className="text-light">{data.deaths}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
