import React from 'react';

const ShowTicket = ({ props }: { props: any }) => {
    return (
        <>
            <div className='w-1/2 bg-[#7e57c2] text-white px-2 py-3 rounded-2xl flex justify-center items-center'>
                Lorem ipsum dolor sit, amet consectetur
            </div>
            <div className='flex justify-end mt-8'>
                <div className='w-1/2 bg-white border border-[#7e57c2] text-[#7e57c2] px-2 py-3 rounded-2xl flex justify-center items-center'>
                    no
                </div>
            </div>
        </>
    );
};

export default ShowTicket;