import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BlackDay from "./components/BlackDay";
import MainContent from "./components/MainContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <BlackDay /> },
      { path: "dashboard", element: <MainContent /> },
    ],
  },
]);

export default router;
