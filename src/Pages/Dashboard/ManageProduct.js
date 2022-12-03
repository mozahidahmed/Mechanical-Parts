import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageRow from './ManageRow';


const ManageProduct = () => {


    const {data:products,isLoading,refetch}=useQuery('users',()=>fetch('https://mechanicalparts.onrender.com/service',{
  
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
        <h2 className='text-3xl text-center mt-7 text-primary font-bold '>Manage product  Page </h2>
        
        <div class="overflow-x-auto mt-12">
<table class="table w-full">

<thead>
<tr>
  <th>No:</th>
  <th>Product id</th>
  <th>Product Name</th>
  <th>Delete</th>
  
 
</tr>
</thead>
<tbody>

{
products.map((product,index)=><ManageRow product={product} index={index} refetch={refetch}></ManageRow> 
)}
</tbody>
</table>
              
</div>
  </div>
    );
};

export default ManageProduct;