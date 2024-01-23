import { useEffect, useRef } from "react";
import styles from "./ExpenseStatistics.module.scss";
import { Chart as ChartJS } from "chart.js/auto";

function ExpenseStatistics() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new ChartJS(myChartRef, {
      type: "pie",
      data: {
        labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
        datasets: [
          {
            data: [15, 30, 35, 20],
            backgroundColor: ["#343C6A", "#FC7900", "#1814F3", "#FA00FF"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.ExpenseStatisticsContainer}>
      <h1 className={styles.title}>Expense Statistics</h1>
      <div className={styles.ExpenseStatisticsPieDiagram}>
        <canvas ref={chartRef} style={{ width: "200px", height: "300px" }} />
      </div>
    </div>
  );
}

export default ExpenseStatistics;
