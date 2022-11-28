import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
  const {user, userLogout} = useContext(AuthContext)
  

    const handleLogout = () => {
      userLogout()
      .then( () => {
        toast.success('Logout Successfully')
      })
      .catch(err => console.log(err))
    }
    return (
        <div className='bg-[#fefefe] '>
        <div className="navbar py-4 max-w-7xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li className='text-error font-semibold lg:mr-5 hover:text-primary'><Link to="/">Home</Link></li>,
       {user?.uid && <li className='text-error font-semibold lg:mr-5 hover:text-primary'><Link to='/dashboard'>Dashboard</Link></li>}
      </ul>
    </div>
    <Link to="/"className="text-2xl font-bold text-primary uppercase ">car<span className='text-primary'>Dealer</span></Link>
  </div>
  <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li className='text-error font-semibold lg:mr-5 hover:text-primary'><Link to="/">Home</Link></li>,
       {user?.uid && <li className='text-error font-semibold lg:mr-5 hover:text-primary'><Link to='/dashboard'>Dashboard</Link></li>}
       {
    user?.uid ?
    <button className='btn btn-primary' onClick={handleLogout}>Logout</button> :   
    <Link to="/signin" className="btn btn-error capitalize px-8 text-white">SignIn</Link> 
   }
    </ul>
  </div>
  <label tabIndex={2} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
</div>
</div>
    );
};

export default Navbar;