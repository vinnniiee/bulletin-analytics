import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main";

function AppLayout() {
    return (
        <div
          className="bg-stone-200 h-screen 
        w-screen flex  justify-start
         items-center relative overflow-scroll"
        >
          <Sidebar/>
          <Main/>
        </div>
      );
}

export default AppLayout