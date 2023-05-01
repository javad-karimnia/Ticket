import { IData } from "@/typescript/interface";
import Image from "next/image";
import {  useRef } from "react";
import parse from 'html-react-parser';

const Course = ({ productDetails }: { productDetails: IData }) => {

    const { details } = productDetails;



    const Show: any = useRef(null);
    const toggle: any = useRef(null);
    const button: any = useRef(null);

    const showHandlers = () => {

        const showCurrent: string = Show.current.className

        if (showCurrent === "w-4/5 h-[710px] overflow-hidden m-auto") {
            Show.current.className = "w-4/5 h-auto overflow-hidden m-auto";
            toggle.current.className = "w-4/5 m-auto flex justify-center py-6 my-5 cursor-pointer -translate-y-6";
            button.current.innerHTML= "بستن"
        } else {
            Show.current.className = "w-4/5 h-[710px] overflow-hidden m-auto";
            toggle.current.className = "m-auto w-4/5 flex justify-center  bg-[rgb(252,252,252,0.7)] cursor-pointer -translate-y-16 pt-12";
            button.current.innerHTML= "ادامه مطلب"
        }   

    };

    return (
        <div className="max-w-screen-2xl m-auto mt-16">
            <div ref={Show} className="w-4/5 h-[710px] overflow-hidden m-auto">
                {
                    details.map(items => {

                        return <div key={items.id}>
                            <div className="flex pt-14">
                                <Image src="/assets/icon/headCart.svg" alt="headCart" width={20} height={26} className="w-auto h-auto ml-1" />
                                {
                                    parse(items.headTitle)
                                }
                            </div>
                            {
                                parse(items.content)
                            }
                        </div>

                    })
                }
            </div>
            <div ref={toggle} className='m-auto w-4/5 flex justify-center  bg-[rgb(252,252,252,0.7)] cursor-pointer -translate-y-16 pt-12' onClick={showHandlers}>
                <button ref={button} className='bg-white text-xs px-9 py-2 flex justify-center items-center rounded-lg shadow-[0_8px_24px_rgba(149,157,165,0.2)]'>
                    ادامه مطلب
                </button>
            </div>
        </div>
    );
};

export default Course;