import React from 'react';
import error from '../assets/error.jpg'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='relative'>
                <h1 className='text-3xl font-bold text-center my-5'>Pages Not Found !</h1>
                <img className='rounded-full' src={error} alt="Error Images" />
                <Link to='/' className=' bg-green-500 mx-auto absolute -bottom-2 btn left-28'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error;