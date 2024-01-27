import React from "react";
import { useSpring } from "react-spring";
import styles from "./WeeklyActivity.module.scss";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale, 
    LinearScale,
    BarElement, 
    Tooltip, 
    Legend 
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

const activityPerWeek = [
    { day: "Sat", deposit: 220, withdraw: 480 },
    { day: "Sun", deposit: 250, withdraw: 120 },
    { day: "Mon", deposit: 230, withdraw: 260 },
    { day: "Tue", deposit: 490, withdraw: 380 },
    { day: "Wed", deposit: 150, withdraw: 250 },
    { day: "Thu", deposit: 390, withdraw: 250 },
    { day: "Fri", deposit: 400, withdraw: 320 },
];

function WeeklyActivity() {

    const chartOptions = {
        scales: {
            x: {
                grid: {
                    display: false,
                },
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 100,
                    max: 500,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },

    };

    const barStyles = {
        barPercentage: 0.8, 
        categoryPercentage: 0.5, 
        borderRadius: 2,
    };

    return (
        <div className={styles.WeeklyActivityContainer}>
            <h1 className={styles.title}>
                Weekly Activity
            </h1>
            <div className={styles.WeeklyActivityDiagram}>
                    <Bar
                        data={{
                            labels: activityPerWeek.map(day => day.day),
                            datasets: [
                                {
                                    label: "Deposit",
                                    data: activityPerWeek.map(day => day.deposit),
                                    backgroundColor: "#1814F3",
                                    ...barStyles,
                                },
                                {
                                    label: "Withdraw",
                                    data: activityPerWeek.map(day => day.withdraw),
                                    backgroundColor: "#16DBCC",
                                    ...barStyles,
                                },
                            ],
                        }}
                        options={chartOptions}
                    />
            </div>
        </div>
    );
}

export default WeeklyActivity;
