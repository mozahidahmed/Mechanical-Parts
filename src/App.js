
import { Route, Routes } from 'react-router-dom';
import Login from '../src/Pages/Login/Login';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home';
import Register from './Pages/Login/Register';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import BuyNow from './Pages/BuyNow/BuyNow';
import AddReview from './Pages/AddReview/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Dashboard from './Pages/Dashboard/Dashboard';
import AllUser from './Pages/Dashboard/AllUser';
import Order from './Pages/Dashboard/Order';
import Welcome from './Pages/Dashboard/Welcome';
import AddProduct from './Pages/Dashboard/AddProduct';
import RequireAuth from './Pages/Login/RequireAuth.js';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import AllOrder from './Pages/Dashboard/AllOrder';
import Protofolio from './Pages/Home/Protofolio';
import Payment from './Pages/Dashboard/Payment';


function App() {
  return (
    <div className="">
      <Navbar></Navbar>
    <Routes>



 <Route path='/' element={<Home></Home>}></Route>

 <Route path='home' element={<Home></Home>}></Route>
 <Route path='buynow/:id' element={<RequireAuth><BuyNow></BuyNow></RequireAuth>}></Route>
 <Route path='payment/:id' element={<Payment></Payment>}></Route>
 <Route path='devoloverprofile' element={<Protofolio></Protofolio>}></Route>
 
 


 <Route path='dashboard' element={<Dashboard></Dashboard>}>

 <Route index element={<Welcome></Welcome>}></Route>
 <Route path="myorder" element={<Order/>}></Route> 
 <Route path='addreview' element={<AddReview></AddReview>}></Route>
 <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>

 <Route path="makeadmin" element={<AllUser/>}></Route> 
 <Route path="addproduct" element={<AddProduct/>}></Route> 
 <Route path="manageproduct" element={<ManageProduct/>}></Route>
 <Route path="allorder" element={<AllOrder/>}></Route>


 
 </Route>

 

 <Route path='login' element={<Login></Login>}></Route>
 <Route path='register' element={<Register></Register>}></Route>

     
 </Routes>






    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
