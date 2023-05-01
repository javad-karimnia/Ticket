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


export default function Courses ({data}:any) {
    console.log(data);
    
    return (
        <>
        </>
    );
};


export async function getStaticProps() {
    const res = await fetch(`http://localhost:4000/data`);
    const data = await res.json();
  
    return {
      props: { data },
      revalidate: 10, //seconds
    };
}