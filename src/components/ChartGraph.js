import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const ChartGraph = ({ data }) => {
  const { active, recovered, deaths } = data;

  //If the object key's length is equal to 1, then we'll say country not found, otherwise we'll return the chart
  console.log(data);
  if (Object.keys(data).length === 1) {
    return (
      <h1 className="text-light d-flex justify-content-center my-3">
        Country not found.
      </h1>
    );
  }

  return (
    <div className="container d-flex my-5">
      {active ? (
        <Bar
          data={{
            labels: ["active", "recovered", "deaths"],
            datasets: [
              {
                label: ["active"],
                data: [active, recovered, deaths],
                backgroundColor: [
                  "rgba(0, 0, 255, 0.5)",
                  "rgba(0, 255, 0, 0.5)",
                  "rgba(255, 0, 0, 0.5)",
                ],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: "current State in Country" },
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ChartGraph;
