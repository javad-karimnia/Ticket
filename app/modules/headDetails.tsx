import { IData } from '@/typescript/interface';
import Image from 'next/image';
import Link from 'next/link';

const HeadD = ({ productDetails }: { productDetails: IData }) => {

    const { picSuport, coverPic, pic, title, price, introduction } = productDetails


    return (
        <div className='max-w-screen-2xl m-auto pt-[50px] mt-[70px]'>
            <div className='w-4/5 bg-white shadow-[0_8px_24px_rgba(94,129,209,0.16)] m-auto p-8 rounded-2xl'>
                <div className='flex'>
                    <div className='w-[50%] ml-24'>
                        <Image src={pic} alt='next' width={78} height={78} className='w-auto h-auto' />
                        <h1 className='font-black pt-2'>
                            {
                                title
                            }
                        </h1>
                        <p className='text-xs mt-4 leading-relaxed text-justify'>
                            {
                                introduction
                            }
                        </p>
                    </div>
                    <div className='w-[41.6%] flex justify-end'>
                            <video preload="none" controls style={{ borderRadius: '10px' }} poster={coverPic} width="100%">
                                <source src="https://botostart.org/courses/other/next/1-%20course%20intro.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                    </div>
                </div>
                <div className='w-full h-[72px] flex mt-10'>
                    <div className='w-1/2 flex items-end justify-between'>
                        <button className='bg-[#2e7d32] rounded-lg text-white text-sm py-2 px-4 flex'>
                            <Image src='/assets/icon/addCart.svg' alt='next' width={30} height={29.5} className='pl-2' />
                            ثبت نام در دوره
                        </button>
                        <span className='flex items-end'>
                            {
                                price
                            }
                            تومان
                        </span>
                    </div>
                    <div className='w-1/2 flex'>
                        <div className='w-1/5 flex justify-center items-center flex-col'></div>

                        {
                            picSuport.map((items: any) => {

                                return <div key={items.id} className='w-1/5 flex justify-center items-center flex-col'>
                                    <Image src={items.SuportPIC} alt='next' width={30} height={29.5} className='pl-2' />
                                    <span className='text-xs mt-2'>
                                        {
                                            items.title
                                        }
                                    </span>
                                </div>

                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadD;