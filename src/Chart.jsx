import React from "react";
import ReactApexChart from "react-apexcharts";

// helper function (REQUIRED)
function generateDayWiseTimeSeries(baseval, count, yrange) {
  let series = [];
  let x = baseval;

  for (let i = 0; i < count; i++) {
    let y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
      yrange.min;

    series.push([x, y]);
    x += 86400000; // +1 day
  }

  return series;
}

const ApexChart = () => {
  const series = [
    {
      name: "BUY PRICE",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        { min: 10, max: 40 }
      ),
    },
    {
      name: "SELL PRICE",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        { min: 10, max: 30 }
      ),
    },
    
  ];

  const options = {
    chart: {
      type: "area",
      stacked: true,
      height: 350,
      events: {
        selection: (chart, e) => {
          console.log(new Date(e.xaxis.min));
        },
      },
    },
    colors: ["#3a35fb", "#fe0032"],
    dataLabels: {
      enabled: false,
    },
     grid: {
    borderColor: "#2c2c2c", // <-- change this
  },
    stroke: {
      curve: "monotoneCubic",
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
     chart: {
    background: "transparent",
  },
    xaxis: {
      type: "datetime",
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
          
  width={800}
      />
    </div>
  );
};

export default ApexChart;
