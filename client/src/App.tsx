import { Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <div className=" flex flex-col items-center bg-primary-white h-[900px] w-[1600px]">
            <Layout />
            <Outlet />
        </div>
    );
}

export default App;
