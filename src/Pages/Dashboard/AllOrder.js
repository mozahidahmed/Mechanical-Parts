import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllOrderRow from './AllOrderRow';


const AllOrder = () => {


    const {data:orders,isLoading,refetch}=useQuery('orders',()=>fetch('https://mechanicalparts.onrender.com/order',{
  
    method:'GET',
    headers:{
        // 'content-type': 'application/json'
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }


    }).then(res=>res.json()))
if(isLoading){
return <Loading></Loading>
}


    return (
        <div className=''>
        <h2 className='text-3xl text-center mt-7 text-primary font-bold '>Manage Order Page </h2>
        
        <div class="overflow-x-auto mt-12">
<table class="table w-full">

<thead>
<tr>
  <th>No:</th>
  <th>Customer Email</th>
  <th> product name</th>
  <th>price</th>
  <th>delete</th>
  
 
</tr>
</thead>
<tbody>

{
orders.map((order,index)=><AllOrderRow  order={order} index={index} refetch={refetch}></AllOrderRow> 
)}
</tbody>
</table>
              
</div>
  </div>
    );
};

export default AllOrder;