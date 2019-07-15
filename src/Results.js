import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";
import "./styles/sass/_results.scss";
import { Line } from "react-chartjs-2";

const Results = ({ dataList }) => {
  let weatherInfo = {
    temperature: [],
    humidity: [],
    pressure: [],
    labels: []
  };

  dataList.map((day, n) => {
    weatherInfo.temperature.push(day.main.temp);
    weatherInfo.humidity.push(day.main.humidity);
    weatherInfo.pressure.push(day.main.pressure);
    weatherInfo.labels.push(`Day ${n}`);
  });

  const weatherData = {
    labels: weatherInfo.labels,
    datasets: [
      {
        label: "Temperature",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(34,102,102,0.6)",
        borderColor: "rgba(34,102,102,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(34,102,102,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(34,102,102,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: weatherInfo.temperature
      },
      {
        label: "Humidity",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(46,66,114,0.6)",
        borderColor: "rgba(46,66,114,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(46,66,114,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(46,66,114,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: weatherInfo.humidity
      },
      {
        label: "Pressure",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(45,136,45,0.6)",
        borderColor: "rgba(45,136,45,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(45,136,45,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(45,136,45,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: weatherInfo.pressure
      }
    ]
  };

  return (
    <div className="results">
      <Line
        className="line-chart"
        width={100}
        height={100}
        data={weatherData}
      />
    </div>
  );
};

export default Results;
