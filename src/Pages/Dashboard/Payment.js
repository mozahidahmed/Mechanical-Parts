import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe('pk_test_51L1TpWGU2wvIXevfvFRcsBQjwexj7jfBVXtIVfJMic9qLe84kJtLckTeyRjmYUkjuKnwOWwSYDcEuHZTeFAsjuvo00vgKyksoX')

const Payment = () => {
    const [user]=useAuthState(auth)
    const {id}=useParams()
    const {data:product,isLoading,refetch}=useQuery('users',()=>fetch(`http://localhost:5000/myorder/${id}`,{
  
    method:'GET',
    headers:{
        'content-type': 'application/json'
       
    }


    }).then(res=>res.json()))
if(isLoading){
return <Loading></Loading>
}


    return (
        <div className='grid grid-cols justify-center mt-6'>

        <div className="card w-96 bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title font-bold">hello sir :{user.displayName}</h2>
            <p   className='text-primary'   >PRODUCTNAME:<span className='font-bold'>{product.productname}</span></p>
            <p   className='text-primary'   >QUANTITY:<span className='font-bold'>{product.quantity}</span></p>
            <p   className='text-primary'   >PHONENUMBER:<span className='font-bold'>{product.phonenumber}</span></p>
            <p   className='text-primary'   >ADDRESS:<span className='font-bold'>{product.address}</span></p>
            <p className='text-primary'>please pay:<span className='font-bold'>${product.price}</span></p>

           
            
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl p-6">
        

                   <Elements stripe={stripePromise}>
                        <CheckoutForm product={product}/>
                    </Elements>
       
        </div>

        </div>
    );
};

export default Payment;