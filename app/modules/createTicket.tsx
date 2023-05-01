import React from 'react';
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';


const CreateTicket = () => {

    const router = useRouter();
    const editorRef: any = useRef()
    const [editorLoaded, setEditorLoaded] = useState(false)
    const { CKEditor, ClassicEditor }: any = editorRef.current || {}

    const [data, setData] = useState('');

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, //Added .CKEditor
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
        }
        setEditorLoaded(true)



        // if(!auth.user && !auth.pass){
        //     router.push('/login')
        // }

    }, [data]);

    const sendHandlers = async (e: any) => {

        if (!data) {
            toast.warning('لطفا اطلاعات را کامل وارد کنید')
        } else {
            let i: any = 0;

            const newTicket = {
                id: i++,
                ticket: data
            }

            const res = await fetch('http://localhost:4000/tickets', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTicket)
            })


            if (res.status === 201) {
                router.push('/dashboard')
                toast.success('تیکت شما با موفقیت ثبت شد')
            }
        }


    }

    return (
        <>
            {editorLoaded ? <CKEditor
                editor={ClassicEditor}
                data={data}
                onChange={(event: any, editor: any) => {
                    const data = editor.getData()
                    setData(data);
                }}
            /> : <p>Carregando...</p>}
            <div className='w-full mt-14 m-auto flex justify-center items-center'>
                <button className='w-1/3 bg-[#7e57c2] rounded py-[6px] px-4 text-white' onClick={sendHandlers}>
                    ارسال تیکت
                </button>
            </div>
        </>
    );
};

export default CreateTicket;