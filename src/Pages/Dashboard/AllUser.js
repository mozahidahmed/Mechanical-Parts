import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUser = () => {


    const {data:users,isLoading,refetch}=useQuery('users',()=>fetch('https://mechanicalparts.onrender.com/user',{
  
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
        <h2 className='text-3xl text-center mt-7 text-primary font-bold '>All Users</h2>
        <h2 className='text-3xl text-center mt-7 text-primary font-bold '>Make Admin</h2>
        
        <div class="overflow-x-auto mt-12">
<table class="table w-full">

<thead>
<tr>
  <th>No:</th>
  <th>User Email</th>
  <th>Make Admin</th>
 
  
 
</tr>
</thead>
<tbody>

{
users?.map((user,index)=><UserRow user={user} index={index} refetch={refetch}></UserRow>  
)
}

</tbody>
</table>
              
</div>
  </div>
    );
};

export default AllUser;
