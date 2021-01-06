import React from 'react';
import { Line } from 'react-chartjs-2';

const Metrics = ({ fetchResponse, queryResponseTime, queryTitle }) => {
  // calculate query response time average
  const queryResponseAverage = (
    queryResponseTime.reduce((a, b) => a + b, 0) / queryResponseTime.length
  ).toFixed(2);

  // store all chart data in state and add in passed down data as labels and data
  const state = {
    labels: queryTitle,
    datasets: [
      {
        label: 'Time',
        fill: false,
        lineTension: 0.2,
        backgroundColor: 'rgba(244, 93, 183, 1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: queryResponseTime,
      },
    ],
  };

  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: `Average Query Response Time: ${queryResponseAverage} seconds`,
            fontSize: 14,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
};

export default Metrics;
