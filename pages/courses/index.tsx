import Products from '@/app/modules/Products';
import React from 'react';


interface IData {
    id: string;
    pic: string;
    name: string;
    price: number;
    introduction: string;
    details: Array<object>;
    Headline: Array<object>;
    info:object
};


export default function Courses ({ ticket, Errors }:any) {
    
    return (
        <>
        </>
    );
};


export async function getStaticProps() {

    try {
        const res = await fetch(`${process.env.BASE_URL}/data`);
        const data = await res.json();
      
        return {
          props: { data },
          revalidate: 10, //seconds
        };
      } catch (error:any) {
        
        return {
          props: { Errors: error.message },
        };
    
      }
   
}