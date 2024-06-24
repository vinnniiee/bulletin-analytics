import { createContext, useState } from "react";
import SidebarItem, { SidebarItemProps } from "../ui/SidebarItem";
import { BiWorld } from "react-icons/bi";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { PiChartScatterBold } from "react-icons/pi";
import { ImHome } from "react-icons/im";
import SidebarHeader from "./SidebarHeader";

const navLinks: SidebarItemProps[] = [
  {
    to: "/",
    icon: (className) => <ImHome className={className} />,
    label: "Home",
  },
  {
    to: "/bar-charts",
    label: "Bar Charts",
    icon: (className) => <RiBarChartHorizontalFill className={className} />,
  },
  {
    to: "/scatter-plots",
    label: "Scatter Plots",
    icon: (className) => <PiChartScatterBold className={className} />,
  },
  {
    to: "/geospatial-graphs",
    label: "Geospatial Graphs",
    icon: (className) => <BiWorld className={className} />,
  },
];

export const SidebarContext = createContext({ toggle: true });

function Sidebar() {
  const [toggle, setToggle] = useState(true);
  return (
    <SidebarContext.Provider value={{ toggle }}>
      <aside
        className={` h-full flex flex-col p-4 overflow-hidden  bg-accent-1-400
                      ${toggle ? "w-96 min-w-[275px]" : "w-32 min-w-[100px]"} duration-200 `}
      >
        <SidebarHeader setToggle={setToggle} />
        <div className="flex flex-col justify-center items-center pt-4 w-full space-y-2">
        {navLinks.map(({ icon, to, label }) => (
          <SidebarItem icon={icon} label={label} to={to} />
        ))}
        </div>
      </aside>
    </SidebarContext.Provider>
  );
}

export default Sidebar;
