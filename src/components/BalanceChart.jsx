import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const BalanceChart = ({ accountDetail }) => {
  const Equity = accountDetail?.accountHistory.map(({ Equity }) => Equity);
  const Balance = accountDetail?.accountHistory.map(({ Balance }) => Balance);
  const object = accountDetail?.accountHistory.map(
    ({ createdAt }) =>
      `${new Date(createdAt).getHours()}:${new Date(
        createdAt
      ).getMinutes()} - ${new Date(createdAt).getDate()}`
  );

  const series = [
    {
      name: "equity",
      data: Equity,
    },
    {
      name: "balance",
      data: Balance,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "string",

      categories: object,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height="auto"
          width={"100%"}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BalanceChart;
