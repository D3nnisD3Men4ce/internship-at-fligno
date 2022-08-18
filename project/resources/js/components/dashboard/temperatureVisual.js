import React, { Component } from "react";
import Chart from "react-apexcharts";
// import DatabaseSimulation from "../../../realtimeSimulation/databaseSimulation.mjs";
import plantData from "../../../realtimeSimulation/mockData.js";

class TemperatureVisual extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 40, 45, 50, 49, 60, 70, 91, 40, 45, 50, 49, 60, 70, 91, 40, 45, 50, 49, 60, 70, 91]
        },
        {
            name: "series-2",
            data: [10,20,30,40,50,60,70,80,20,30,40,50,60,70,80,20,30,40,50,60,70,80,20,30,40,50,60,70,80]
          }
      ]
    };
  }

  render() {
    console.log(plantData[0]);
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TemperatureVisual;