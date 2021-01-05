import React from 'react';
import { Line } from 'react-chartjs-2';

const Metrics = ({ fetchResponse, queryResponseTime, queryTitle }) => {
  //   console.log(queryResponseTime);
  //   console.log(queryTitle);

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
      <p>Metrics bitches</p>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: 'Average Query Response Time',
            fontSize: 20,
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
