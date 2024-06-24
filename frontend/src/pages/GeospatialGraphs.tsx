import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { getMapFeatures } from "../services/mapService";
import { Feature } from "geojson";
import { useResizeObserver } from "../hooks/useResizeObserver";
import { getResources } from "../services/bulletinService";
import { Resources } from "../enums/resources";
import { BarChartItem } from "../components/PestleChart";

function GeospatialGraphs() {
  const wrapperRef = useRef(null);
  const trackSize = useRef(null);

  const dimensions = useResizeObserver(wrapperRef);
  const alignSvg = useResizeObserver(trackSize);

  const projection = d3.geoNaturalEarth1();
  const path = d3.geoPath(projection);
  const [features, setFeatures] = useState<Feature[]>();
  const [countries, setCountries] = useState<BarChartItem[]>([]);
  const graticules = d3.geoGraticule();

  useEffect(() => {
    const fetchFeatures = async () => {
      const fetchedFeatures = await getMapFeatures();
      const fetchedCountries = await getResources(Resources.COUNTRIES);
      setCountries(fetchedCountries || []);
      setFeatures(fetchedFeatures);
    };
    fetchFeatures();
  }, []);
  const hashingDomain = countries.map((d) => d.name);
  const hashingRange = countries.map((d) => d.count);

  const hashing = d3.scaleOrdinal().domain(hashingDomain).range(hashingRange);

  const colorDomain = d3.extent(hashingRange);

  const color =
    colorDomain[0] &&
    d3
      .scaleLinear()
      .domain(colorDomain)
      .range(["rgba(18, 47, 87,0.4  )", "rgba(18, 47, 87,1)"] as unknown as [
        number,
        number
      ]);

  return (
    <div
      className="w-full  bg-accent-1-500 rounded min-h-[500px] flex flex-col 
    space-y-4 justify-center items-center p-4 overflow-scroll"
    >
      <h1 className="text-5xl font-medium">Geospatial Graph</h1>
      <div
        className="w-full h-full bg-inherit overflow-scroll"
        ref={wrapperRef}
      >
        <svg
          className=" fill-black/20    stroke-white/20 w-full h-full overflow-scroll"
          height={alignSvg?.height}
          width={alignSvg?.width}
        >
          <g
            ref={trackSize}
            transform={
              dimensions &&
              alignSvg &&
              `translate(${
                (dimensions?.width - alignSvg?.width) / 2 +
                "," +
                (dimensions?.height - alignSvg?.height) / 2
              } )`
            }
          >
            {features && (
              <>
                <path
                  className="scale-50 fill-none md:scale-[.6] stroke-black/10 lg:scale-[.75] xl:scale-100 "
                  d={path(graticules()) || ""}
                />
                {features.map((d: Feature, i) => {
                  const name = d.properties?.name as string;
                  const count = hashingDomain.includes(name)
                    ? (hashing(name) as number)
                    : 0;

                  return (
                    <path
                      className="scale-50 md:scale-[.6] lg:scale-[.75] xl:scale-100 "
                      key={i}
                      fill={`${count > 0 && color && color(count)}` || "none"}
                      d={path(d) || ""}
                    >
                      <title>
                        {name}: {count}
                      </title>
                    </path>
                  );
                })}
              </>
            )}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default GeospatialGraphs;
