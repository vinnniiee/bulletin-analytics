import BarChart from "../charts/bar-chart/BarChart";
import { BarChartItem } from "../components/PestleChart";
import { Resources } from "../enums/resources";

function BarCharts() {
  const xValue = (item: BarChartItem) => item.name;
  const yValue = (item: BarChartItem) => item.count;
  return (
    <div
      className="flex flex-col justify-start items-center w-full h-full bg-accent-1-500
      rounded-lg  p-4 pl-4 min-h-[500px] "
    >
      <h2 className="text-4xl m-4  tracking-wider font-medium whitespace-nowrap">Pestle Chart</h2>
      <div className="w-full h-full min-h-[100px]">
      <BarChart
        showTicks={true}
        resource={Resources.PESTLES}
        xValue={yValue}
        yValue={xValue}
      />
      </div>
    </div>
  );
}

export default BarCharts;
