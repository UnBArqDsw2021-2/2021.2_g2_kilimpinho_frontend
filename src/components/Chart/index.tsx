import { useChart } from "@/contexts/ChartContext";
import { getExpendtiresByMonth } from "@/services/expenditureService";
import { Flex } from "@/UI/Flex";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useCallback, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { useTheme } from "styled-components";
import { Button } from "../Button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  chartData: number[];
  labels: string[];
}
export const Chart = ({ chartData, labels }: ChartProps) => {
  const theme = useTheme();
  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Gastos",
          data: chartData,
          backgroundColor: "#EF5DA8",
        },
      ],
    }),
    [chartData, labels]
  );

  const { setLabels, setChartData, resetChart, setCurrentView } = useChart();

  const handleViewByMonth = useCallback(async (month: number) => {
    const date = new Date();
    date.setMonth(month);
    const expenditures = await getExpendtiresByMonth(JSON.stringify({ date }));

    const amountArray = expenditures.map((expenditure) => expenditure.amount);
    const titlesArray = expenditures.map((expenditure) => expenditure.title);
    setChartData(amountArray);
    setLabels(titlesArray);
  }, []);
  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: "Gastos x Lucro",
        },
      },
    }),
    []
  );

  return (
    <Flex minWidth="600px" maxWidth="700px" flexDirection="column">
      <Flex flexWrap="wrap" gap={theme.spacings.medium}>
        {labels.length === 12 && labels[0] === "Janeiro" ? (
          labels.map((label, index) => (
            <Button
              size="small"
              onClick={() => {
                handleViewByMonth(index);
                setCurrentView(label);
              }}
              color="secondary"
            >
              {label}
            </Button>
          ))
        ) : (
          <Button onClick={() => resetChart()} color="secondary">
            Visualizar todos os meses
          </Button>
        )}
      </Flex>
      <Bar options={options} data={data} />
    </Flex>
  );
};
