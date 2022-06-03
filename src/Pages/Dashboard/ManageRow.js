import React from 'react';
import { toast } from 'react-toastify';

const ManageRow = ({product,index,refetch}) => {
    const {name,_id}=product;

    const handleDelete=()=>{
      fetch(`https://intense-inlet-37114.herokuapp.com/service/${_id}`,{
          method:'DELETE',
          headers:{
           'content-type' : 'application/json'
          
          }
   
   
      })
      .then(res=>res.json()) 
      .then(data=>{
          if(data.deletedCount){
              toast.success('deleted');
              refetch();
          }
      })
      
      
   
   
    }
   
  
  

    return (
        <tr>
         <th>{index+1}</th>
        <td>{_id}</td>
        <td>{name}</td>
        
        <td><button onClick={()=>handleDelete()}  class="btn btn-xs">delete</button></td>
        
      </tr>
    );
};

export default ManageRow;