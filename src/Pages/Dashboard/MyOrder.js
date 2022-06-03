import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOrder = ({order,index,refetch}) =>{

const {productname,price,address,_id}=order;


const handleDelete=()=>{
   fetch(`https://intense-inlet-37114.herokuapp.com/myorder/${_id}`,{
       method:'DELETE',
       headers:{
        'content-type' : 'application/json'
       
       }


   })
   .then(res=>res.json()) 
   .then(data=>{
       if(data.deletedCount){
           toast.success('Your Oredr is deleted');
           refetch();
       }
   })
   
   


 }



  
return (
        <tr>
        <th>{index+1}</th>
       <td>{productname}</td>
        <td>{price}</td>
        <td>{address}</td>
     
        <td>

           {(price && !order.paid) &&  <Link to={`/payment/${_id}`}><button class="btn btn-xs">Pay</button></Link>}
           {(price && order.paid) &&  <button class="btn btn-xs bg-yellow-900">Payed</button>}
           
            
            
        </td>
      

        <td>
        {(price && !order.paid) &&  <button onClick={()=>handleDelete()}  class="btn btn-xs bg-yellow-900">delete</button> }
          
           
           </td>


       
       
     </tr>
    );
};

export default MyOrder;