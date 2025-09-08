import "./App.css";
import AnimatedBackgroundVector from "./components/AnimatedBackgroundVector";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <AnimatedBackgroundVector />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
