import { IData } from "@/typescript/interface";
import Image from "next/image";
import { forwardRef, useRef } from "react";

const Child = forwardRef((props: any, ref) => {

    const Title: any = useRef(null);
    const Pic: any = useRef(null);
    const boxInfoCourse: any = useRef(null);

    const dropHandlers = () => {

        const titleCurrent: string = Title.current.className;

        const Current = (Name: any, Class: any) => {
            Name.current.className = Class;
            Name.current.style.transition = "all 0.5s";
        };



        if (titleCurrent === "w-3/4 flex my-3") {
            Current(Title, "w-3/4 flex my-5")
            Current(boxInfoCourse, "min-h-[64px] h-auto")
            Current(Pic, "w-4 object-contain rotate-0")
        } else {
            Current(Title, "w-3/4 flex my-3")
            Current(boxInfoCourse, "overflow-hidden min-h-0 h-0")
            Current(Pic, "w-4 object-contain rotate-180")
        }
    };

    return (

        <div className=" bg-white mb-4 rounded-[10px] shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)]">
            <div onClick={dropHandlers} className="py-[5px] px-5 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] rounded-[10px] flex justify-center items-center cursor-pointer">
                <div ref={Title} className="w-3/4 flex my-3">
                    <p className="text-[#6e6e6e]">
                        فصل اول
                        :
                    </p>
                    <p className="text-[#212121]">
                        معرفی دوره
                    </p>
                </div>
                <div className="w-1/4 flex justify-end">
                    <Image ref={Pic} src="/assets/img/ArrowHeadlines.png" alt="ArrowHeadlines" width={1000} height={1000} className="w-4 object-contain rotate-180" />
                </div>
            </div>

            <div ref={boxInfoCourse} className="overflow-hidden min-h-0 h-0">
                <div className="p-5">
                    <div className="my-4 px-3 flex justify-center items-center bg-[#f5f5f5] rounded-[5px] border border-[#c0c0c0] text-[#626262] text-xs">
                        <div className="w-[3%] my-2">
                            <p className="w-6 h-6 bg-[#7e57c2] text-white flex justify-center items-center rounded-[5px]">
                                1
                            </p>
                        </div>
                        <div className="w-[90%] ml-[10px]">
                            <p>
                                معرفی دوره
                            </p>
                        </div>
                        <div className="w-[7%] flex justify-end">
                            <p>
                                5 دقیقه
                            </p>
                            <Image src="/assets/icon/watchSuportPurple.svg" alt="ArrowHeadlines" width={1000} height={1000} className="w-4 mr-3" />
                        </div>
                    </div>
                    <div className="my-4 px-3 flex justify-center items-center bg-[#f5f5f5] rounded-[5px] border border-[#c0c0c0] text-[#626262] text-xs">
                        <div className="w-[3%] my-2">
                            <p className="w-6 h-6 bg-[#7e57c2] text-white flex justify-center items-center rounded-[5px]">
                                2
                            </p>
                        </div>
                        <div className="w-[90%] ml-[10px]">
                            <p>
                                معرفی دوره
                            </p>
                        </div>
                        <div className="w-[7%] flex justify-end">
                            <p>
                                4 دقیقه
                            </p>
                            <Image src="/assets/icon/watchSuportPurple.svg" alt="ArrowHeadlines" width={1000} height={1000} className="w-4 mr-3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});


const Headlines = ({ productDetails }: { productDetails: IData }) => {



    return (
        <div className="max-w-screen-2xl m-auto mt-28 flex justify-center">
            <div className="w-4/5">
                <div className="flex mb-10">
                    <Image src='/assets/icon/headCart.svg' alt="headCart" width={20} height={26} className="w-auto h-auto" />
                    <h2 className="font-black text-xl">
                        سرفصل ها
                    </h2>
                </div>
                <div>

                    <Child/>
                    <Child/>
                    <Child/>
                    <Child/>
                    <Child/>
                    <Child/>
                    <Child/>
                    <Child/>
                    <Child/>
                    <Child/>
                    <Child/>


                </div>
            </div>
        </div>
    );
};

export default Headlines;