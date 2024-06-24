import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Main() {
  return (
    <div
      className="w-full flex flex-col justify-start items-center
           h-screen overflow-scroll bg-accent-1-300
         md:px-4 lg:px-8  py-8 min-w-[360px]"
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center   w-full  p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
