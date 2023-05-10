import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineGraph = () => {
    const chartOptions = {
        series: [
            {
                name: 'Guest',
                data: [30, 40, 35, 50, 49, 60],
            },
            {
                name: 'Users',
                data: [50, 30, 25, 10, 99, 35],
            },
        ],
        options: {
            chart: {
                id: 'line-chart',
            },
            xaxis: {
                categories: ['weak1', 'weak2', 'weak3', 'weak4', 'weak5', 'weak6'],
            },
            stroke: {
                curve: 'smooth', // Enable smooth curve
            },
        },
    };

    return (
        <div>
            <h1>Line Graph Example</h1>
            <ReactApexChart
                options={chartOptions.options}
                series={chartOptions.series}
                type="line"
                height={400}
            />
        </div>
    );
};

export default LineGraph;
