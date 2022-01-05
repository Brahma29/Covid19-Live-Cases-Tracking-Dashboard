import React from "react";
import CardItem from "./CardItem";

const Card = ({ data }) => {

  //Destructuring the required keys from the response
  const { active, deaths, recovered, country } = data;

  return (
    <>
      <h1 className="text-center text-light">
        {country ? `Covid Cases in ${country}` : "Covid Cases in World"}
      </h1>
      <div className="container">
        <div
          className="my-2"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardItem
            title="Active"
            color="primary"
            bgcolor="primary"
            number={active}
            desc="Total active cases."
          />
          <CardItem
            title="Recovered"
            color="success"
            bgcolor="success"
            number={recovered}
            desc="Total victims recovered."
          />
          <CardItem
            title="Deaths"
            color="danger"
            bgcolor="danger"
            number={deaths}
            desc="Total deaths due to covid."
          />
        </div>
      </div>
    </>
  );
};

export default Card;
