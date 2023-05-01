import { Auth } from '@/app/context/Authenticator';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const index:NextPage = () => {

    const { dispatch } = useContext(Auth)
    const router = useRouter()

    interface IUserData {
        user: string,
        pass: number,
    }

    const [userData, setUserData] = useState({
        user: '',
        pass: '',
    });


    const changeHandlers = (e: any) => {

            setUserData({ ...userData, [e.target.name]: e.target.value })      

    }

    const saveHandlers = () => {
        if(userData.user === "Javad" && userData.pass === "12345678"){
            dispatch(userData);
            router.push('/dashboard')
        }else{
            toast.warning('اطلاعات وارد شده صحیح نیست')
        }
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
            <Image src='/assets/img/logoXL.webp' alt='Home' width={3000} height={3000} className="w-[180px] h-[90px] object-contain ml-2 mb-8" />
            <div className='max-w-lg w-full p-10 bg-white flex justify-center items-center flex-col rounded-2xl shadow-[0_48px_100px_0_rgba(17,12,46,0.15)]'>
                <div className='w-full p-10'>
                    <div className='flex flex-col text-[#656565]'>
                        <label>نام کاربری</label>
                        <input name='user' value={userData.user} type='text' onChange={changeHandlers} className='mt-3 block w-full px-3 py-2 bg-white border border-[#c4c4c4] rounded-sm text-sm shadow-sm placeholder-[#c4c4c4]
                        focus:outline-none focus:border-[#7e57c2] focus:ring-1 focus:ring-[#7e57c2]
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        '/>
                    </div>
                    <div className='flex flex-col text-[#656565] mt-5'>
                        <label>رمز عبور</label>
                        <input name='pass' value={userData.pass} type='text' onChange={changeHandlers} className='mt-3 block w-full px-3 py-2 bg-white border border-[#c4c4c4] rounded-sm text-sm shadow-sm placeholder-[#c4c4c4]
                        focus:outline-none focus:border-[#7e57c2] focus:ring-1 focus:ring-[#7e57c2]
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        '/>
                    </div>
                    <div className='w-full mt-14'>
                        <button className='w-full bg-[#7e57c2] rounded py-[6px] px-4 text-white' onClick={saveHandlers}>
                            ورود به سایت
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;