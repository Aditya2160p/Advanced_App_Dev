import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const Analytics = () => {
  const [chartData, setChartData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);

  useEffect(() => {
    // Line chart data
    const lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Plan A',
          data: [12, 19, 3, 5, 2, 3, 7],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          fill: false,
        },
        {
          label: 'Plan B',
          data: [6, 10, 5, 7, 9, 13, 15],
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          fill: false,
        },
        {
          label: 'Plan C',
          data: [8, 5, 12, 6, 10, 8, 11],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
        },
      ],
    };

    // Pie chart data
    const pieChartData = {
      labels: ['Plan A', 'Plan B', 'Plan C'],
      datasets: [{
        data: [30, 40, 30], // Sample percentages for each plan
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)'],
      }],
    };

    // Create the line chart
    const ctxLineChart = document.getElementById('analytics-line-chart');
    const lineChart = new Chart(ctxLineChart, {
      type: 'line',
      data: lineChartData,
      options: {
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Months',
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Number of Users',
            },
          },
        },
      },
    });

    // Create the pie chart
    const ctxPieChart = document.getElementById('analytics-pie-chart');
    const pieChart = new Chart(ctxPieChart, {
      type: 'pie',
      data: pieChartData,
    });

    setChartData(lineChart);
    setPieChartData(pieChart);

    // Cleanup on unmount
    return () => {
      if (lineChart) {
        lineChart.destroy();
      }
      if (pieChart) {
        pieChart.destroy();
      }
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <>
     <div className="flex">
      {/* Line Chart */}
      <div className="flex-1">
        <canvas id="analytics-line-chart" width="400" height="200"></canvas>
        {/* Cards for number of users per plan */}
      <div className="flex-1 ml-4">
        {/* Card for Plan A */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Plan A Users</h2>
          <p className="text-lg text-gray-700">Number of users: 50</p> {/* Replace with actual data */}
        </div>
      </div>

      <div className="flex-1 ml-4">
        {/* Card for Plan B */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Plan B Users</h2>
          <p className="text-lg text-gray-700">Number of users: 70</p> {/* Replace with actual data */}
        </div>
      </div>

      <div className="flex-1 ml-4">
        {/* Card for Plan C */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Plan C Users</h2>
          <p className="text-lg text-gray-700">Number of users: 60</p> {/* Replace with actual data */}
        </div>
      </div>
      </div>

      {/* Pie Chart */}
      <div className="flex-1 ml-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Subscription Plans Distribution</h2>
          <canvas id="analytics-pie-chart" width="400" height="200"></canvas>
        </div>
      </div>

      
    </div>
  
    </>
  );
};

export default Analytics;
