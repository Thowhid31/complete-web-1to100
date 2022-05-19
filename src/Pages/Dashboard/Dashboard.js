import React from 'react';
import { Outlet } from 'react-router-dom';
import DashSidebar from '../../components/DashSidebar';


const Dashboard = () => {
    return (
        <DashSidebar>
            <Outlet/>
        </DashSidebar>
    );
};

export default Dashboard;