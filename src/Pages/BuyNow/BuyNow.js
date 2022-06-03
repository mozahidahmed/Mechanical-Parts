import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const BuyNow = () => {


    const [user] = useAuthState(auth)

    const handleOrder = event => {
        event.preventDefault();


        const order = {

            email: user.email,
            name: user.displayName,
            productname: event.target.productname.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            address: event.target.address.value,
            phonenumber: event.target.phonenumber.value




        }


        fetch('https://intense-inlet-37114.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    
                    toast('Your Order success')
                }
                

                   
                

            })

    }



    







    const { id } = useParams();

    const [services, setServices] = useState([]);
    useEffect(() => {

        fetch(`https://intense-inlet-37114.herokuapp.com/service/${id}`)
            .then(res => res.json()).then(data => setServices(data))


    }, [])


   
    
    




    return (
        <div className='flex justify-center mt-12'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>

                <div>
                    <h3 className='text-primary text-xl font-bold text-center'>PRODUCTS DETAILS</h3>

                    <div class="card w-96 bg-base-100 shadow-xl image-full mt-6">
                        <figure><img src={services.img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <div>
                                <h2 class="card-title">{services.name}</h2>
                                <p>availableQuantity:{services.availableQuantity}</p>
                                <p>minimumOrderQuantity:{services.minimumOrderQuantity}</p>
                                <p>price:{services.price}</p>

                            </div>

                        </div>
                    </div>
                </div>



                <div>
                    <h3 className='text-primary text-xl font-bold text-center'>ORDER NOW</h3>
                    <div className='card lg:max-w-lg bg-base-100 shadow-xl mt-6'>
                        <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                            <label></label>
                            <input name="email" placeholder="Y O U E M A I L " class="input input-bordered w-full max-w-xs" value={user.email} readOnly disabled />
                            <input name="productname" placeholder=" " class="input input-bordered w-full max-w-xs" value={services.name} readOnly disabled />
                            <input name="quantity" placeholder="P R O D U C T  Q U A N T I T Y" class="input input-bordered w-full max-w-xs" type="number" required/>
                            <input name="price" placeholder="P R I C E " class="input input-bordered w-full max-w-xs" value={services.price} type="number" readOnly disabled />

                            <input name="address" placeholder="A D D R E S S " class="input input-bordered w-full max-w-xs" type="text" required/>

                            <input name="phonenumber" placeholder="P H O N E    N U M B E R " class="input input-bordered w-full max-w-xs" type="number" required/>
                            <button className='btn w-full max-w-xs' type="submit">ORDER NOW</button>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BuyNow;