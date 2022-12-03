import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const url='https://mechanicalparts.onrender.com/service';
        fetch(url,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(data)
    
    
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast.success('Your Product is')
        })
    
    
        };


    return (
        <div className='mt-12'>

           <h4 className='text-xl text-primary text-center font-bold'>Add Product</h4>
            
        <form onSubmit={handleSubmit(onSubmit)}  className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
       <label></label>
        <input  placeholder="product name" class="input input-bordered w-full max-w-xs" type="text" {...register("name", { required: true, maxLength: 20 })}/>
        
        <input  placeholder="Your price" class="input input-bordered w-full max-w-xs" type="number" {...register("price", { required: true, maxLength: 20 })}/>
        
        <input  placeholder="availableQuantity" class="input input-bordered w-full max-w-xs" type="number" {...register("availableQuantity", { required: true, maxLength: 20 })} />
        
        <input  placeholder="minimumOrderQuantity" class="input input-bordered w-full max-w-xs" type="number" {...register("minimumOrderQuantity", { required: true, maxLength: 20 })} />
        
        <input  placeholder="description" class="input input-bordered w-full max-w-xs" type="text" {...register("description")} required/>
        
        <input  placeholder="img" class="input input-bordered w-full max-w-xs"  type="photo URL" {...register("img")}   required/>
        
        <button className='btn w-full max-w-xs' type="submit">Add Product</button>
        </form>

</div>
    );
};

export default AddProduct;