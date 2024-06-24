import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { BarChartItem } from "../../components/PestleChart";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { getResources } from "../../services/bulletinService";
import { Resources } from "../../enums/resources";

type Margin = { left: number; right: number; top: number; bottom: number };

type BarChartProps = {
  xValue: (item: BarChartItem) => number;
  yValue: (item: BarChartItem) => string;
  margin?: Margin;
  showTicks?: boolean;
  resource: Resources;
  minimumPadding?: number;
};

function BarChart(props: BarChartProps) {
  const { xValue, yValue, resource, showTicks } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const dimensions = useResizeObserver(wrapperRef);

  const margin = props.margin || {
    left: showTicks ? 90 : 0,
    right: 10,
    top: 0,
    bottom: 0,
  };

  const minimumPadding = 5;

  const [data, setData] = useState<BarChartItem[]>([]);

  useEffect(() => {
    const getdata = async () => {
      const response = await getResources(resource);

      console.log(response);
      if (response && response[0].name) {
        setData(response);
      }
    };
    getdata();
  }, [resource]);

  let xScale: d3.ScaleLinear<number, number, never>;
  let yScale: d3.ScaleBand<string>;
  let ticks;
  if (dimensions) {
    yScale = d3
      .scaleBand()
      .range([
        showTicks ? margin.top : margin.top,
        dimensions?.height - margin.bottom - 20,
      ])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    xScale = d3
      .scaleLinear()
      .range([minimumPadding, dimensions?.width - margin.left - margin.right]);

    if (data?.length > 0) {
      const yDomain = data.map((item) => item.name);
      yScale.domain(yDomain);

      const max: number = d3.max(data, xValue) as number;

      xScale.domain([0, max]);
      ticks = xScale.ticks(6);
    }
  }

  return (
    <div
      ref={wrapperRef}
      className=" relative w-full h-full bg-inherit rounded "
    >
      <svg className="w-full h-full ">
        {dimensions && (
          <g>
            {showTicks &&
              ticks?.map((tick) => {
                const x = xScale(tick) + margin.left;
                console.log(tick);
                return (
                  <g
                    key={tick}
                    transform={`translate(${x + minimumPadding},${margin.top})`}
                  >
                    <line
                      className="stroke-black/10"
                      y1={margin.top}
                      y2={dimensions.height - margin.bottom - 20}
                      strokeWidth={1}
                    />
                    <text
                      transform={`translate(0,${
                        dimensions.height - margin.bottom
                      })`}
                      textAnchor="middle"
                      className="fill-black/60 text-sm lg:text-md font-semibold"
                    >
                      {tick}
                    </text>
                  </g>
                );
              })}
            {showTicks && (
              <g transform={`translate(${margin.left},${margin.top})`}>
                {data?.map((item) => {
                  return (
                    <text
                      key={item.name}
                      className="text-sm fill-black/60 font-semibold"
                      textAnchor="end"
                      transform={` translate(5,${
                        5 + yScale.bandwidth() / 2 + (yScale(item.name) || 0)
                      }) `}
                    >
                      {item.name}
                    </text>
                  );
                })}
              </g>
            )}
            {data?.map((item) => (
              <rect
                key={item.name}
                className="fill-primary-100"
                y={yScale(yValue(item)) || 0}
                x={margin.left + 2 * minimumPadding}
                height={yScale.bandwidth()}
                width={xScale(xValue(item))}
              >
                <title>
                  {item.name}: {item.count}
                </title>
              </rect>
            ))}
          </g>
        )}
      </svg>
    </div>
  );
}

export default BarChart;
