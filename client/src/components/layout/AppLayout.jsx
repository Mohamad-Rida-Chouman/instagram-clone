import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import './appLayout.css'

const AppLayout = () => {
    return <div className="main-div">
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;