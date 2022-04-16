import { getExpenditures } from "@/services/expenditureService";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type ChartContextType = {
  labels: string[];
  chartData: number[];
  setChartData: (chartData: number[]) => void;
  setLabels: (labels: string[]) => void;
  resetChart: () => void;
  setCurrentView: (view: string) => void;
  currentView: string;
};

export const ChartContextDefaultValues: ChartContextType = {
  labels: [],
  chartData: [],
  setChartData: () => () => {},
  setLabels: () => () => {},
  resetChart: () => () => {},
  setCurrentView: () => () => {},
  currentView: "all",
};

export const ChartContext = createContext<ChartContextType>(
  ChartContextDefaultValues
);
ChartContext.displayName = "ChartContext";

const initialLabels = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
export const ChartProvider: React.FC = ({ children }) => {
  const [chartData, setChartData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>(initialLabels);
  const [currentView, setCurrentView] = useState<string>("all");

  const resetChart = () => {
    setLabels(initialLabels);
    getExpenditures().then((expenditures) => setChartData(expenditures));

    setCurrentView("all");
  };
  useEffect(() => {
    getExpenditures().then((expenditures) => setChartData(expenditures));
  }, []);
  const values = useMemo(
    () => ({
      chartData,
      labels,
      setChartData,
      setLabels,
      resetChart,
      currentView,
      setCurrentView,
    }),
    [
      chartData,
      labels,
      setChartData,
      setLabels,
      resetChart,
      currentView,
      setCurrentView,
    ]
  );

  return (
    <ChartContext.Provider value={values}>{children}</ChartContext.Provider>
  );
};

export function useChart() {
  const context = useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a ChartProvider");
  }

  return context;
}
