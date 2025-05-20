import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-[#e8faf4]'>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;