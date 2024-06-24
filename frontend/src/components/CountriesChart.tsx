import { ReactNode } from "react";
import { Resources } from "../enums/resources";
import BarChart from "../charts/bar-chart/BarChart";
import { BarChartItem } from "./PestleChart";

type CountriesChartProps = {
  children?: ReactNode;
};

function CountriesChart(props: CountriesChartProps) {
  const { children } = props;
  const yValue = (item: BarChartItem) => item.name;
  const xValue = (item: BarChartItem) => item.count;
  return (
    <div
      className="w-full h-full bg-accent-2-500
        rounded-lg overflow-hidden p-2 "
    >
      <BarChart
        resource={Resources.COUNTRIES}
        xValue={xValue}
        yValue={yValue}
      />
      {children}
    </div>
  );
}

export default CountriesChart;
