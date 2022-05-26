import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

    const url='http://localhost:5000/reviews';
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
        if(data.acknowledged){
            toast.success('Your Review is added')
        }
       
    })


    };





    return (
    

<div className='mt-12'>

<h4 className='text-xl text-primary text-center font-bold'>Add review</h4>
 
<form onSubmit={handleSubmit(onSubmit)}  className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
<label></label>
<input  placeholder="Y O U R N A M E " class="input input-bordered w-full max-w-xs" type="text" {...register("name", { required: true, maxLength: 20 })}/>
<input  placeholder="I M A G E  U R L " class="input input-bordered w-full max-w-xs" type="img" {...register("img", { required: true, maxLength: 20 })}/>
<input  placeholder="Y O U R R E V I E W " class="input input-bordered w-full max-w-xs" type="text" {...register("description", { required: true, maxLength: 20 })}/>
        
<button className='btn w-full max-w-xs' type="submit">Add Review</button>
</form>

</div>
    );
};

export default AddReview;