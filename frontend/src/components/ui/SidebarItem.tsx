import { ReactNode, useContext } from "react";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "../Sidebar/Sidebar";

export type SidebarItemProps = {
  to: string;
  icon: (classes?: string) => ReactNode;
  label: string;
};

function SidebarItem(props: SidebarItemProps) {
  const { toggle } = useContext(SidebarContext);
  const { to, icon, label } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `  flex    items-center  w-full text-xl font-medium whitespace-nowrap ${
          isActive
            ? "bg-accent-3-500 text-white"
            : "hover:bg-accent-3-300 hover:text-white"
        } ${
          toggle
            ? "rounded p-4 space-x-4 justify-between"
            : "rounded p-4 space-x-0 justify-center"
        } duration-200`
      }
      style={{ transition: "color .0s" }}
    >
      <div className="" style={{ transition: "fill .0s" }}>
        {icon(` ${toggle ? "scale-100" : "scale-150"} duration-200`)}
      </div>

      <div
        className={`w-full ${
          toggle ? " w-full" : "  w-0"
        } duration-200 overflow-hidden`}
      >
        <p
          className={`w-full ${
            toggle ? "translate-x-0 " : "translate-x-48  "
          } duration-200`}
          style={{ transition: "color .0s" }}
        >
          {label}
        </p>
      </div>
    </NavLink>
  );
}

export default SidebarItem;
