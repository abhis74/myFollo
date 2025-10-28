
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Invest from "./components/Invest";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
    
      },
      {
        path: "/invest",
        element: <Invest />,
    
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />
);
