import logo from './logo.svg';
import './App.css';
import React from "react";
import { Chart } from "react-google-charts";
import axios from 'axios';
import { useEffect, useState } from "react";



function App() {
  const [data, getData] = useState([]);
  const URL = "http://substantiveresearch.pythonanywhere.com/";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);
      });
  };


  const dataTable = [
    ["Name", "Sector ID"],
    ["Materials", 1],
    ["Industrials", 1],
    ["Real Estate", 1],
    ["Energy", 1],
    ["Communication Services	", 1],
    ["Healthcare", 1],
    ["Real Estate", 1],
    ["Information Technology", 1],
    ["Utilities", 1],
  ];

  const options = {
    title: "Pie Chart",
  };

  return (
    <div>
      <h1>API task</h1>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Sector ID</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.sector_id}</td>
          </tr>
        ))}
      </tbody>
      <Chart
      chartType="PieChart"
      data={dataTable}
      options={options}
      width={"100%"}
      height={"400px"}
    />
   
    </div>
    
  );
}

export default App;