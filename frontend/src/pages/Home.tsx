import CountriesChart from "../components/CountriesChart";
import PestleChart from "../components/PestleChart";

function Home() {
  return (
    <div className=" flex flex-start lg:flex-row flex-col w-full justify-stretch items-center space-y-4 lg:space-y-0 lg:space-x-4 text-black/75 ">
      <div
        className="bg-secondary-400 w-full flex flex-col space-y-8 
                rounded p-8 font-bold shadow-lg shadow-black/50"
      >
        {/* <div className="flex flex-col "> */}
        <h5 className="text-2xl">Total Count</h5>
        <h3 className="text-6xl text-center -mt-6 tracking-wide font-semibold">
          1000 <span className="text-2xl tracking-normal ">nos</span>
        </h3>
        {/* </div> */}
        <div className="flex justify-around items-center font-medium ">
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-semibold text-lg">97</h4>
            <h6 className="text-xs -mt-1.5">Topics</h6>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-semibold text-lg">9</h4>
            <h6 className="text-2xs -mt-1.5">PSTLEs</h6>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-semibold text-lg">49</h4>
            <h6 className="text-xs -mt-1.5">Countries</h6>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-accent-1-500 rounded 
      flex p-2 flex-col justify-around items-start shadow-lg max-h-[350px]"
      >
        <h5 className="text-white text-xl ml-2 ">PESTLEs</h5>
        <PestleChart />
      </div>
      <div
        className="w-full bg-accent-2-500 rounded max-h-[350px]
      flex p-2 flex-col justify-around items-start shadow-lg"
      >
        <h5 className="text-white text-xl ml-2 ">Countries</h5>
        <CountriesChart> </CountriesChart>
      </div>
    </div>
  );
}

export default Home;
