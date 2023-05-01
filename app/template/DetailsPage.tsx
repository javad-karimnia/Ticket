import React from 'react';
import HeadD from '../modules/headDetails';
import { IData } from '@/typescript/interface';
import Course from '../modules/courseDetails';
import Headlines from '../modules/Headlines';

const Details = ({ productDetails }: { productDetails:IData }) => {
    return (
        <>
            <HeadD productDetails={productDetails}/>
            <Course productDetails={productDetails}/>
            <Headlines productDetails={productDetails}/>
        </>
    );
};

export default Details;