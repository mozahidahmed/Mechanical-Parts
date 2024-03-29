
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const [user] = useAuthState(auth);
  
    const logout = () => {
      signOut(auth);
      localStorage.removeItem('accessToken')
    };
    
       
  
 
        const menuitems=
        <>
        <li className='text-black font-bold text-1xl'><Link to="/home">Home</Link></li>
            <li className='text-black font-bold text-1xl'><Link to="/products">Products</Link></li>
        <li className='text-black font-bold text-1xl'><Link to="/blog">Blog</Link></li>
      
        
       
        <li className='text-black font-bold text-1xl'><Link to="/devoloverprofile">Protifolio</Link></li>
        <li className='text-black font-bold text-1xl'><Link to="/gallery">Gallery</Link></li>
     
     
        <li>
         { 
         user?
         <>
                    <Link className='text-black bg-[#F73775] lg:me-4 font-bold text-1xl' to="/dashboard">Dashboard</Link>
                    <button onClick={logout} class="btn  bg-yellow-400  lg:mx-2 hover:bg-yellow-400 text-black font-bold text-1xl">SignOut</button>
  
         </>
         :
       
         <Link className='text-black font-bold text-1xl bg-yellow-400 rounded-xl' to="/login">Login</Link>
         
         
         
         }
          {/* ,,,,, */}
          </li>
      
        </>
      
    return (
        <div className="navbar  bg-gray-100 flex shadow-2xl  justify-between bg-opacity-200 p-4 px-6 sticky top-0 z-[50]">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3  shadow bg-gray-200  w-52">
           
           {menuitems}
  
            
            </ul>
          </div>
          <a className="normal-case text-xl font-bold">Mechanical Parts</a>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {menuitems}
          </ul>
        </div>
       <div>
       <div className='navbar-end'>
       <label for="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
       
       </div>
       </div>
       

      </div>
    );
};

export default Navbar;
