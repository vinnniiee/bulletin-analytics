import { useEffect, useState } from "react";
import { getPestles } from "../../services/bulletinService";
import * as d3 from "d3";

function DonutChart() {
  const dimensions = { width: 500, height: 500 };

  const [pestles, setPestles] = useState([]);
  useEffect(() => {
    const fetchPestles = async () => {
      const { pestles } = await getPestles();
      console.log(pestles);
      setPestles(pestles);
    };
    fetchPestles();
  }, []);

  const pie = d3.pie().value((d) => d.count);
  const arcGenerator = d3
    .arc()
    .outerRadius(dimensions.width / 2 - 50)
    .innerRadius(50);

  const colour = d3.scaleOrdinal(d3["schemeSet3"]);

  useEffect(() => {
    colour.domain(pestles.map((item) => item.pestle));
    const graph = d3.select(".graph");
    const paths = graph.selectAll("path").data(pie(pestles));

    paths
      .exit()
      .transition()
      .duration(500)
      .attrTween("d", exitArcTween)
      .remove();

    paths.transition().duration(500).attrTween("d", updateArcTween);

    paths
      .enter()
      .append("path")
      .attr("fill", (d) => colour(d.data.pestle))
      .each(function (d) {
        this._current = d;
      })
      .transition()
      .duration(1500)
      .attrTween("d", enterArcTween);

    function exitArcTween(d) {
      const i = d3.interpolate(d.startAngle, d.endAngle);
      return (t) => {
        d.startAngle = i(t);
        return arcGenerator(d);
      };
    }

    function enterArcTween(d) {
      const i = d3.interpolate(d.endAngle, d.startAngle);
      return (t) => {
        d.startAngle = i(t);
        return arcGenerator(d);
      };
    }
    function updateArcTween(d) {
      const i = d3.interpolate(this._current, d);
      this._current = i(1);
      return function (t) {
        return arcGenerator(i(t));
      };
    }
  }, [arcGenerator, colour, pestles, pie]);

  return (
    <div className="w-full flex flex-col space-y-4 justify-center items-center">
      <svg
        width={500}
        height={500}
        className="drop-shadow-[10px_10px_10px_rgba(0,0,0,.5)]"
      >
        <g
          className="graph"
          transform={`translate(${dimensions.width / 2},${
            dimensions.height / 2
          })`}
        ></g>
      </svg>
      <h4 className="text-stone-700 font-medium text-xl capitalize">
        Distribution of news articles among Pestles
      </h4>
    </div>
  );
}
export default DonutChart;
