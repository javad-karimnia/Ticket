import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <>
            <div className="max-w-screen-2xl flex justify-center items-center m-auto px-6">
                <div className="w-2/5">
                    <h1 className="font-black text-5xl leading-tight">
                        آموزش برنامه نویسی با بوتواستارت
                    </h1>
                    <p className="text-[#757575] text-lg pl-8 text-justify mt-6">
                        آموزش هدفمند، پروژه محور و جامع برنامه نویسی همراه با پشتیبانی دائمی جزو استاندارد های آموزشی بوتواستارت است که بدون شک باعث ورود شما به بازار کار خواهد شد.
                    </p>
                    <div className="mt-14">
                        <Link href='#' className="px-8 py-3 bg-[#7e57c2] text-white rounded-2xl ml-3">
                            مشاهده دوره ها
                        </Link>
                        <Link href='#' className="px-8 py-3 bg-[#e8eaf6] text-[#7e57c2] rounded-2xl">
                            نظرات دانشجویان
                        </Link>
                    </div>
                </div>
                <div className="w-2/5">
                    <Image src='/assets/img/banner.webp' alt="banner" width={1000} height={1000} className="w-full" />
                </div>
            </div>
            <div className='max-w-screen-md m-auto flex justify-end'>
                <Image src='/assets/icon/Arrow.svg' alt="Arrow" width={1000} height={1000} className="w-44 ml-40" />
            </div>
        </>

    );
};

export default Banner;