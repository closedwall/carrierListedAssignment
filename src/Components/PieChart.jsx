import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
    const chartOptions = {
        series: [55, 31, 14],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Basic tees', 'Custom short pants', 'Super hoodies'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            }],
        },
    };

    return (
        <div>
            {/* <h1>Pie Chart Example</h1> */}
            <ReactApexChart
                options={chartOptions.options}
                series={chartOptions.series}
                type="pie"
                width={380}
            />
        </div>
    );
};

export default PieChart;
