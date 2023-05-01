
import { IData } from "@/typescript/interface";
import Image from "next/image";
import Link from "next/link";



const Products = ({ data }: { data:Array<IData> } ) => {    
    
    return (
        <div className="max-w-screen-2xl m-auto px-6">
            <div className="w-full flex justify-center items-center">
                <div className="w-2/5 flex">
                    <Image src='/assets/icon/headCart.svg' alt=" " width={1000} height={1000} className="w-8" />
                    <h2 className="font-black text-2xl">
                        جدیدترین دوره ها
                    </h2>
                </div>
                <div className="w-2/5 flex justify-end">
                    <Link href='#' className="text-[#7e57c2] ml-2 text-2xl">
                        بیشتر
                    </Link>

                    <Image src='/assets/icon/arrowMore.svg' alt=" " width={1000} height={1000} className="w-4" />
                </div>
            </div>
            <div className="w-4/5 flex justify-center items-center m-auto">
                {
                    data.map(( item:IData )=> {
                        
                        return <div key={item.id} className="w-1/4 ml-6 shadow-[0_8px_24px_rgba(94,129,209,0.16)] rounded-2xl">
                            <div className="p-4">
                                <Image src={item.pic} alt=" " width={1000} height={1000} className="w-20" />
                            </div>
                            <div className="px-4">
                                <h4 className="font-black pb-12 text-sm">
                                    {item.title}
                                </h4>
                                <div className="flex mt-10">
                                    <Image src='/assets/icon/Watch.svg' alt=" " width={1000} height={1000} className="w-4 ml-1" />
                                    ۴۰ ساعت
                                </div>
                                <div className="flex justify-center items-center my-6">
                                    <div className="w-1/2">
                                        <div className="w-20 px-3 py-[2.5px] bg-[#e8eaf6] text-[#5e81d1] rounded-full">
                                            ۴۶۷ نفر
                                        </div>
                                    </div>
                                    <div className="w-1/2 text-[#454545] flex justify-end">
                                        {item.price} تومان
                                    </div>
                                </div>
                            </div>
                            <hr className="w-11/12 bg[#e0e0e0] m-auto"></hr>
                            <div className="flex justify-between flex-wrap p-4">
                                <Link href="#" className="w-[90px] h-[37px]">
                                    <div className="w-[95%] h-[95%] flex justify-center items-center bg-[#7e57c2] rounded-lg text-white">
                                        ثبت نام
                                    </div>
                                </Link>
                                <Link href={`courses/${item.id}`} className="w-[110px] flex justify-end items-center text-[#7e57c2]">
                                    مشاهده دوره
                                    <Image src='/assets/icon/arrowMore.svg' alt=" " width={1000} height={1000} className="w-4 m-1" />
                                </Link>
                            </div>
                        </div>

                    })
                }
            </div>
        </div>
    );
};

export default Products;