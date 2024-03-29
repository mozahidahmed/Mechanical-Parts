
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({product}) => {
    const {price,name,email,_id}=product;
    const stripe=useStripe();
    const elements=useElements();
     const [cardError,setCardError]=useState('');
     const [success,setSuccess]=useState('');
     const [processing,setProcessing]=useState(false);
     const [transactionId,setTransactionId]=useState('');
     const [clientSecret,setClientSecret]=useState('');


useEffect(()=>{
fetch('https://mechanicalparts.onrender.com/create-payment-intent',{
method:'POST',
headers:{
    'content-type' : 'application/json',
    // 'authorization': `Bearer ${localStorage.getItem('accessToken')}` 
},
body:JSON.stringify({price})

})
.then(res=>res.json())
.then(data=>{

if(data?.clientSecret){
    setClientSecret(data.clientSecret);

}

})
},[price])









    const handleSubmit=async (event)=>{
        event.preventDefault();
        if(!stripe || !elements){
           return
        }
        

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }



          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

      
            
            setCardError(error?.message  || '');
            setSuccess('');
            //....................000000000000000000000....
            setProcessing(true);
 //............................................................................           
 const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
    clientSecret,
    {
      payment_method: {
        card: card,
        billing_details: {
          name: name,
          email: email,
        },
      },
    },
  );  

if(intentError){
    setCardError(intentError?.message);
    setProcessing(false);
    
}

else{
    setCardError('')
    setTransactionId(paymentIntent.id);
    console.log(paymentIntent);
    setSuccess('Congragulation! your payment is success');

    //.....00000000000000..........................................
    const payment={
        order:_id,
        transactionId:paymentIntent

    }
    fetch(`https://mechanicalparts.onrender.com/myorder/${_id}`,{
        method: 'PATCH',
        headers:{
            'content-type' : 'application/json',
             
        },
        body:JSON.stringify(payment)

    })
    .then(res=>res.json())
    .then(data=>{


        setProcessing(false)
        console.log(data)

    })

}

         
        
        
      




    }
    return (
    <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-primary mt-5 px-12" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {
        cardError && <p className='text-red-500'>{cardError}</p>
    }
    {
        success && <div className='text-green-500'>
            <p>{success}</p>
            <p>Your trId:{transactionId}</p>
        </div>
    }
    </div>
    
    );
};

export default CheckoutForm;























// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';

// const CheckoutForm = ({product}) => {
//     const stripe=useStripe();
//     const elements=useElements();
//      const [cardError,setCardError]=useState('');

//      const [clientSecret,setClientSecret]=useState('');

//      const {price,email,name}=product;

// useEffect(()=>{
// fetch('https://mechanicalparts.onrender.com/create-payment-intent',{
// method:'POST',
// headers:{
//     'content-type' : 'application/json',
//     'authorization': `Bearer ${localStorage.getItem('accessToken')}` 
// },
// body:JSON.stringify({price})

// })
// .then(res=>res.json())
// .then(data=>{

// if(data?.clientSecret){
//     setClientSecret(data.clientSecret);

// }

// })


// },[price])



//     const handleSubmit=async (event)=>{
//         event.preventDefault();
//         if(!stripe || !elements){
//            return
//         }
        

//         const card = elements.getElement(CardElement);
//         if (card == null) {
//             return;
//           }



//           const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: 'card',
//             card,
//           });

      
//             if(error){
//                 setCardError(error?.message)
//             }
//              else{
//                 setCardError('');
//              }    
      
// //CONFRM CA R D ......................................................................
     
        
        
      




//     }
//     return (
//     <div>
//      <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       <button className="btn btn-primary mt-5 px-6" type="submit" disabled={!stripe || !clientSecret}>
//         Pay
//       </button>
//     </form>
//     {
//         cardError && <p className='text-red-500'>{cardError}</p>
//     }
//     </div>
    
//     );
// };

// export default CheckoutForm;