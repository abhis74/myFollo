import { motion } from 'framer-motion';
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Invest from "./Pages/Invest";
import Transact from "./Pages/Transact";
import Prefo from "./Pages/Prefo";
import MyFollo from "./Pages/MyFollo";
import LetsTalk from "./Pages/LetsTalk";
import JoinMApp from "./Pages/JoinMApp";

const pageMotion = {
  initial: { opacity: 0.7, y: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0.7, y: 0 },
  transition: { duration: 0.2 }
};

// Wrap each route component with the transition
const withTransition = (Component) => {
  return (
    <motion.div
      {...pageMotion}
    >
      <Component />
    </motion.div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: withTransition(Home),
      },
      {
        path: "/invest",
        element: withTransition(Invest),
      },
      {
        path: "/transact",
        element: withTransition(Transact),
      },
      {
        path: "/Prefo",
        element: withTransition(Prefo),
      },
      {
        path: "/MyFollo",
        element: withTransition(MyFollo),
      },
      {
        path: "/LetsTalk",
        element: withTransition(LetsTalk),
      },
      {
        path: "/mApp",
        element: withTransition(JoinMApp),
      }
    ]
  }
]);