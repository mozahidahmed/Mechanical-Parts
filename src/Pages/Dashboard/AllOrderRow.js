
import { toast } from 'react-toastify';

const AllOrderRow = ({index,order,refetch}) => {
    const {productname,price,email,_id}=order;
     
    const handleDelete=()=>{
   fetch(`http://localhost:5000/order/${_id}`,{
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
       <td>{email}</td>
        <td>{productname}</td>
        <td>{price}</td>
        <td><button onClick={()=>handleDelete()} class="btn btn-xs">DELETE</button></td>


       
       
     </tr>
    );
};

export default AllOrderRow;