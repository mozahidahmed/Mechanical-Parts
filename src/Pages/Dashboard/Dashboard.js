import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user]=useAuthState(auth)
  const [admin]=useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
       
          <Outlet></Outlet>
  
        
        </div> 
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content bg-[#f2f2f2]">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashboard">Welcome</Link></li>
            <li><Link to="/dashboard/myorder">My Order</Link></li>
           
            {
              !admin &&  <li><Link  to="/dashboard/addreview">Add review</Link></li>
            }
            
            <li><Link to="/dashboard/myprofile">My profile</Link></li>
           

            {admin && <>
              <li><Link to="/dashboard/makeadmin">makeAdmin</Link></li>
            <li><Link to="/dashboard/addproduct">AddProduct</Link></li>
            <li><Link to="/dashboard/manageproduct">Manage product</Link></li>
            <li><Link to="/dashboard/allorder">manage Order</Link></li>
            
            
            </>}


            
            
            
       
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;