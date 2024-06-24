import { Fragment, useEffect, useRef, useState } from "react";
import { ChronicData, getBulletinsByDate } from "../services/bulletinService";
import { useResizeObserver } from "../hooks/useResizeObserver";
import * as d3 from "d3";
import { formatMonth } from "../utils/months";

function ScatterPlots() {
  const [chronicData, setchronicData] = useState<ChronicData[]>([]);

  const wrapperRef = useRef(null);

  const dimensions = useResizeObserver(wrapperRef);

  const margin = { left: 10, right: 0, bottom: 10, top: 0 };

  const labelMargin = {
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getBulletinsByDate();
      if (data && data[0]?.date) {
        setchronicData(data);
      }
    };
    getData();
  }, []);

  console.log(chronicData);
  let xScale: d3.ScaleTime<number, number, never>;
  let yScale: d3.ScaleLinear<number, number, never>;
  let xTicks;
  let yTicks;
  if (dimensions && chronicData.length > 0) {
    const xDomain = d3.extent(chronicData, (d) => new Date(d.date)) as Date[];
    const yDomain = [0, d3.max(chronicData, (d) => d.items.length)] as number[];

    xScale = d3
      .scaleTime()
      .range([
        10 + margin.left + labelMargin.left + labelMargin.right,
        dimensions.width - 10,
      ])
      .domain(xDomain)
    yScale = d3
      .scaleLinear()
      .range([
        dimensions.height -
          10 -
          margin.bottom -
          labelMargin.bottom -
          labelMargin.top,
        10,
      ])
      .domain(yDomain);
    console.log(xScale(new Date(chronicData[0].date)));
    console.log(chronicData[0].date);
    xTicks = xScale.ticks(5);
    yTicks = yScale.ticks(4);
    console.log("yTicks", yTicks);
  }

  return (
    <div
      ref={wrapperRef}
      className="h-[400px] w-full bg-accent-1-500 rounded p-4 shadow-lg"
    >
      <svg className="w-full h-full">
        <g>
          {yTicks?.map((tick,i) => {
            return (
              <Fragment key={i}>
                <text
                  transform={`translate(${
                    margin.left - 10 + "," + yScale(tick)
                  })`}
                >
                  {tick}
                </text>
                <line
                  className="stroke-black/10"
                  x1={margin.left + labelMargin.left + labelMargin.right}
                  x2={dimensions && dimensions.width - margin.right}
                  y1={yScale(tick)}
                  y2={yScale(tick)}
                  strokeWidth={1}
                />
              </Fragment>
            );
          })}
        </g>
        <g>
          {chronicData.map((data, i) => {
            return (
              <circle
                className="fill-black/70"
                key={i}
                cx={xScale(new Date(data.date))}
                cy={yScale(data.items.length)}
                r={10}
              />
            );
          })}
        </g>
        <g>
          {xTicks?.map((tick,i) => {
            return (
              <text
                key={i}
                transform={`translate(${
                  xScale(tick) + "," + (dimensions && dimensions?.height - 5)
                })`}
              >
                {formatMonth[tick.getMonth()]}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default ScatterPlots;
