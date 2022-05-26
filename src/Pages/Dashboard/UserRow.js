import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index,refetch}) => {
    const {email,role,_id} = user;

    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                // 'content-type': 'application/json'
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
                

            },

        })
        .then(res=>{

            if(res.status === 403){
                toast.error('faild..you not admin')
            }

           return res.json()})
        .then(data=>{
           
        
              if(data.modifiedCount > 0){
               refetch();
               toast.success(`you are Admidded`)
           }
        
        


        })

    }






    return (
        <tr>
        <th>{index+1}</th>
       <td>{email}</td>
    <td>{role !== 'admin' && <button onClick={makeAdmin}  class="btn btn-xs">Make Admin </button>}</td>
       
 
     </tr>

    );
};

export default UserRow;