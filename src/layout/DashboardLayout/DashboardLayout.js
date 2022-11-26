import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/shared/Navbar/Navbar';

const DashboardLayout = () => {

   
    return (
      
        <div className="max-w-7xl mx-auto">
            <Navbar/>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    
      <li><Link to="/dashboard">My Orders</Link></li>
      <li><Link to="/dashboard/add-product">Add A Product</Link></li>
      <li><Link to="/dashboard/my-product">My Product </Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;