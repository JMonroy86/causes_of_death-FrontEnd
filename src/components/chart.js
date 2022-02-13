import React, { useState, useEffect, useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Context } from "../store/appContext";

export const DynamicChart = () => {
  const {store} = useContext(Context)
  return (
    <Bar
      options={{
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },
      }}
      data={store.chartData ? store.chartData : {}}
      width={500}
    />
  );
};
