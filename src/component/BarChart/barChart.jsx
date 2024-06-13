import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
    const data = {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: [
                    "#3e95cd",
                    "#8e5ea2",
                    "#3cba9f",
                    "#e8c3b9",
                    "#c45850",
                ],
                data: [2478, 5267, 734, 784, 433],
            },
        ],
    };
    const options = {
        legend: { display: false },
        plugins: {
            title: {
                display: true,
                text: "Predicted world population (millions) in 2050",
            },
        },
    };
    return (
        <div>
            <h2>Bar Chart Example</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
