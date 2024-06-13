import React from "react";
import { Line } from "react-chartjs-2";

const MultiChart = () => {
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Weekly Sales",
                data: [18, 12, 6, 9, 12, 3, 9],
                backgroudColor: ["rgba(255,26,104,0.2)"],
                borderColor: ["rgba(255,26,104,1)"],
            },
            {
                label: "Weekly Cost",
                data: [9, 3, 12, 18, 21, 33, 24],
                backgroudColor: ["rgba(0,0,0,0.2)"],
                borderColor: ["rgba(0,0,0,1)"],
                yAxisID: "percentage",
            },
        ],
    };
    const options = {
        plugins: {
            title: {
                display: true,
                text: "Multi Chart Example",
            },
        },
        scales: {
            x: { title: { display: true, text: "Day of the week" } },
            y: {
                beginAtZero: true,
                title: { display: true, text: "Weekly Sales in $" },
            },
            percentage: {
                beginAtZero: true,
                position: "right",
                title: { display: true, text: "Weekly Cost in Percentage (%)" },
            },
        },
    };
    return (
        <div>
            <h2>Multi Chart Example</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default MultiChart;
