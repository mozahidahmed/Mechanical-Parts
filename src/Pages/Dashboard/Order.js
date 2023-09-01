import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrder from './MyOrder';

const Order = () => {
//     const [orders,setOrders]=useState([]);
   
     const [user]=useAuthState(auth)

//     useEffect(()=>{
    
//  if(user){
//     fetch(`https://mechanicalparts.onrender.com/myorder?email=${user.email}`)
//     .then(res=>res.json())
//     .then(data=>setOrders(data))
//  }
    
    
//     },[user])
const {data:orders,isLoading,refetch}=useQuery('orders',()=>fetch(`https://mechanicalparts.onrender.com/myorder?email=${user.email}`,{
  
  method:'GET',
  headers:{
      'content-type': 'application/json'
      
  }


  }).then(res=>res.json()))
if(isLoading){
return <Loading></Loading>
}
    return (
        <div className=''>
        <h2 className='text-3xl text-center mt-7 text-primary font-bold '>My Order </h2>
        
        <div class="overflow-x-auto mt-6">
<table class="table w-full">

<thead>
<tr>
  <th>No:</th>
  <th>Product name:</th>
  <th>Total Quantity</th>
  <th>Total price</th>
  <th>Address</th>
  <th>pay</th>
  <th>delete</th>
  
</tr>
</thead>
<tbody>

{
orders.map((order,index,)=><MyOrder order={order} index={index} refetch={refetch}></MyOrder>
)}
</tbody>
</table>
              
</div>
  </div>
    );
};

export default Order;