import { useContext } from "react";
import { SidebarContext } from "./Sidebar";
import HamButton from "../ui/HamButton";

export type SidebarHeaderProps = {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

function SidebarHeader(props: SidebarHeaderProps) {
  const { setToggle } = props;
  const { toggle } = useContext(SidebarContext);
  return (
    <div
      className={`flex justify-between items-center w-full border-b-2 border-black/20 pb-4`}
    >
      <h1
        className={`text-2xl font-medium ${
          toggle ? "-translate-x-0 w-full" : "-translate-x-64 w-0"
        } duration-200`}
      >
        Dashboard
      </h1>
      <HamButton
        classes={`${
          toggle ? "right-0 translate-x-0" : "right-full translate-x-full"
        }`}
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
}

export default SidebarHeader;
