import Error from "./pages/Error";
import Home from "./pages/Home";
import "./index.css";
import AppLayout from "./pages/AppLayout";
import BarCharts from "./pages/BarCharts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ScatterPlotsLog from "./pages/ScatterPlotsLog";
import GeospatialGraphs from "./pages/GeospatialGraphs";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/bar-charts", element: <BarCharts /> },
        { path: "/scatter-plots", element: <ScatterPlotsLog /> },
        { path: "/geospatial-graphs", element: <GeospatialGraphs /> },
        // {
        //   path: "/authentication",
        //   element: <Authentication />,
        //   errorElement: <Error />,
        // },
        // {
        //   element: <ProtectedRoute />,
        //   errorElement: <Error />,
        // children: [
        // {
        //   path: "/user",
        //   element: <User />,
        //   //   loader: orderLoader,
        //   errorElement: <Error />,
        // },
        // ],
        // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
