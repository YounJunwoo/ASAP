//import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Graph({ data = [], title = "그래프 제목", label = "데이터 라벨", color = "#87ceeB" }) {
    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: title },
        },
    };
    const labels = data.map((d) => d.x);
    const chartData = {
        labels,
        datasets: [
            {
                label: label,
                data: data.map((d) => d.y),
                borderColor: color,
                backgroundColor: color + "80",
            },
        ],
    };

    return (
        <div className="graph">
            {data.length > 0 && <Line options={options} data={chartData} />}
        </div>
    );
}

export default Graph;



