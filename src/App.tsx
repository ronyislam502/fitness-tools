import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./shared/NavBer";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
