import Image from 'next/image';
import React from 'react';

const Mycourses = () => {
    return (
        <div className="w-full px-9 py-6 bg-white rounded-xl shadow-[0_8px_24px_-15px_rgba(94,129,209,0.16)]">
            <div className="w-full flex">
                <div className="w-[10%]">
                    <Image src='/assets/icon/Next.svg' alt='Next' width={50} height={50} className="w-14" />
                </div>
                <div className="w-4/5">
                    <h2 className="text-[#212121] text-sm mb-1">
                        دوره جامع و پروژه محور Next JS
                    </h2>
                    <p className="text-[#656565] text-xs">
                        برای مشاهده دوره های غیررایگان از اسپات پلیر استفاده کنید.
                    </p>
                </div>
                <div className="w-[10%] flex justify-center items-center">
                    <span className="border border-[#2e7d32] text-[#2e7d32] py-1 px-2 rounded-lg text-sm cursor-pointer">
                        راهنما
                    </span>
                </div>
            </div>
            <hr className="w-full bg-[#dddddd] my-4" />
            <div className="w-full flex">
                <div className="w-[10%]">
                    <Image src='/assets/icon/Typescript.svg' alt='Typescript' width={50} height={50} className="w-14" />
                </div>
                <div className="w-4/5">
                    <h2 className="text-[#212121] text-sm mb-1">
                        دوره مقدماتی تا پیشرفته تایپ اسکریپت
                    </h2>
                    <p className="text-[#656565] text-xs">
                        برای مشاهده دوره های غیررایگان از اسپات پلیر استفاده کنید.
                    </p>
                </div>
                <div className="w-[10%] flex justify-center items-center">
                    <span className="border border-[#2e7d32] text-[#2e7d32] py-1 px-2 rounded-lg text-sm cursor-pointer">
                        راهنما
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Mycourses;