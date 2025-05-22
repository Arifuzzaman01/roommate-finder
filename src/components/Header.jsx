import React from 'react';
import Banner from './Banner';
import CardSection from './CardSection';

const Header = () => {
    return (
        <div>
            
            <div className='bg-[#e8faf4] w-11/12 mx-auto'>
                <Banner></Banner>
                <CardSection></CardSection>
            </div>
        </div>
    );
};

export default Header;