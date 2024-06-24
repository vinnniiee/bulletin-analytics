import BarChart from "../charts/bar-chart/BarChart";
import { Resources } from "../enums/resources";

export type BarChartItem = {
  name: string;
  count: number;
};

function PestleChart(props: { showTicks?: boolean }) {
  const { showTicks } = props;

  const xValue = (item: BarChartItem) => item.name;
  const yValue = (item: BarChartItem) => item.count;
  return (
    <div
      className="w-full bg-accent-1-500
      rounded-lg overflow-hidden p-2"
    >
      <BarChart
        xValue={yValue}
        yValue={xValue}
        showTicks={showTicks}
        resource={Resources.PESTLES}
      />
    </div>
  );
}

export default PestleChart;
