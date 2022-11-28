import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import Navbar from '../../Pages/shared/Navbar/Navbar';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
  const [isBuyer] = useBuyer(user?.email)
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
    
      
         {
          isBuyer && <>
          
          
          <li><Link to="/dashboard">My Orders</Link></li>
            <li><Link>My Wishlist</Link></li>

          </>
         }
            
       
      
     
     
       
          {
            isSeller && <>
            <li><Link to="/dashboard/add-product">Add A Product</Link></li>
      <li><Link to="/dashboard/my-product">My Product </Link></li>
            </>
          }
    
    
      {
        isAdmin && <>
          <li><Link to="/dashboard/all-seller">All Seller </Link></li>
      <li><Link to="/dashboard/all-buyer">All Buyer </Link></li>
        </>
      }
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;