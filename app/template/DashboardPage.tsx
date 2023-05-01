import Image from "next/image";
import { useContext, useEffect } from "react";
import { Auth } from "../context/Authenticator";
import { useRouter } from "next/router";
import ShowTicket from "../modules/showTicket";
import CreateTicket from "../modules/createTicket";


const DashboardPage = ({ Ticket }: { Ticket:any }) => {

    console.log(Ticket);
    
    const router = useRouter();
    const { auth } = useContext(Auth)

    return (
        <div className="max-w-screen-2xl m-auto">
            <div className="w-11/12 m-auto flex justify-center itemc mt-4 mb-40">
                <div className="w-1/5 pl-4 pt-4">
                    <div className="mt-8 mb-[50px] bg-white shadow-[0_8px_24px_-15px_rgba(94,129,209,0.16)] p-4 rounded-xl flex justify-center items-center flex-col">
                        <div className="w-full flex flex-col justify-center items-center mb-4">
                            <div className="w-[100px] h-[100px] rounded-full bg-[#bdbdbd] flex justify-center items-center text-white font-black text-6xl mb-5 m-auto">
                                <span className="-translate-y-2">
                                    م
                                </span>
                            </div>
                            <p>
                                محمد جواد
                            </p>
                            <p className="mb-4">
                                09305208685
                            </p>
                            <hr className="w-full bg-[#dddddd]" />
                        </div>
                        <div className="w-full">
                            <ul>
                                <li className="mr-4 my-[22px] text-sm flex cursor-pointer">

                                    <Image src='/assets/icon/Home.svg' alt='Home' width={18} height={16} className="w-[18px] h-4 ml-2" />
                                    حساب کاربری

                                </li>
                                <li className="mr-4 my-[22px] text-sm flex cursor-pointer">
                                    <Image src='/assets/icon/Student.svg' alt='Home' width={18} height={16} className="w-[18px] h-4 ml-2" />
                                    دوره های من
                                </li>
                                <li className="mr-4 my-[22px] text-sm flex cursor-pointer">
                                    <Image src='/assets/icon/QR.svg' alt='Home' width={18} height={16} className="w-[18px] h-4 ml-2" />
                                    لایسنس ها
                                </li>
                                <li className="mr-4 my-[22px] text-sm flex cursor-pointer">
                                    <Image src='/assets/icon/Ticket.svg' alt='Home' width={18} height={16} className="w-[18px] h-4 ml-2" />
                                    ارسال تیکت
                                </li>
                                <li className="mr-4 my-[22px] text-sm text-[#d32f2f] flex cursor-pointer">
                                    <Image src='/assets/icon/logOut.svg' alt='Home' width={18} height={16} className="w-[18px] h-4 ml-2" />
                                    خروج

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-[64%] pl-4 pt-4 mt-8 mb-[50px]">
                    <h3 className="text-[#656565] text-3xl font-black mb-10">
                        ارسال تیکت پشتیبانی
                    </h3>
                    
                      {  
                        
                        Ticket.ticket.length ?  <ShowTicket props={Ticket} /> : <CreateTicket />
                      
                      }
                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;