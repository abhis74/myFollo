
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Invest from "./Pages/Invest";
import Transact from "./Pages/Transact";
import Prefo from "./Pages/Prefo";
import MyFollo from "./Pages/MyFollo";
import LetsTalk from "./Pages/LetsTalk";
import JoinMApp from "./Pages/JoinMApp";

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
    
      },
       {
        path: "/transact",
        element: <Transact />,
    
      },
      {
        path: "/Prefo",
        element: <Prefo />,
    
      },
      {
        path: "/MyFollo",
        element: <MyFollo />,
    
      },
      {
        path: "/LetsTalk",
        element: <LetsTalk />,
    
      },
      {
        path: "/mApp",
        element: <JoinMApp/>,
    
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />
);
