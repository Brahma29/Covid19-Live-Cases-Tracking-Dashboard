import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { fetchData } from "./components/api";
import Countries from "./components/Countries";
import ChartGraph from "./components/ChartGraph";
import Table from "./components/Table";

const App = () => {
  const [data, setData] = useState();
  const [country, setCountry] = useState("");

  //Calling the function fetchData to get the data and store in fetchedData.
  useEffect(async () => {
    const fetchedData = await fetchData();
    setData(fetchedData);
  }, []);

  //Hitting the API specific for country.
  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };

  if (data === undefined) return <h1>Loading.......</h1>;

  return (
    <div>
      <Navbar heading="Covid-19 Cases Tracking Application" />
      <Card data={data} />
      <Countries handleCountryChange={handleCountryChange} />
      <ChartGraph data={data} />
      <Table />
    </div>
  );
};

export default App;
