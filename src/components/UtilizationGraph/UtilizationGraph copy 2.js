import React from 'react';
import { Bar } from 'react-chartjs-2';
import './UtilizationGraph.css'



const data = {
  labels: ['Available', 'Regular', 'carpool' ],
  
  datasets: [
    {
      label: '100 of Votes', 
      data: [20,40,80],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
 
  
  
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide

    scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }]
    },

  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {


 
  
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
   
  },

  
};

const UtilizationGraph = () => (
  <>
   <div  className="UtilizationGraph">
    <Bar data={data} options={options} />
</div>

  </>
);

export default UtilizationGraph;