import Image from 'next/image';
import React from 'react';

const Spinner = () => {
    return (
        <div className='w-screen h-screen bg-[#f1f2f3] flex justify-center items-center fixed z-50 top-0'>
            <Image src='/assets/img/Spinner.gif' alt='Spinner' width={200} height={200}/>
        </div>
    );
};

export default Spinner;