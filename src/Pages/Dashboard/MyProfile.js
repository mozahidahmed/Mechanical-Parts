import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

const [user]=useAuthState(auth)



    return (
<div className='flex justify-center mt-12'>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{user.displayName}</h2>
    <h2 className="card-title">{user.email}</h2>
   
    
  </div>
</div>
</div>
    );
};

export default MyProfile;