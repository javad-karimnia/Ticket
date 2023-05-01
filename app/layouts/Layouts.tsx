import Image from "next/image";
import Link from "next/link";

//SVG
const Icone = "/assets/icon";

const Layouts = ({ children }: any) => {

    return (
        <>
            <header>
                <div className="flex justify-center items-center max-w-screen-2xl px-8 pt-2 m-auto">
                    <div className="w-1/2 lg:w-1/3 hidden lg:flex justify-center">
                        <Image src='/assets/img/logo.webp' alt="" width={1000} height={1000} className="w-24 hidden lg:block" />
                    </div>
                    <div className="w-1/2 lg:w-1/3 flex">
                        <Image src={`${Icone}/Menu.svg`} alt="Icone" width={1000} height={1000} className="w-9 p-2 lg:hidden" />
                        <nav className="w-full hidden lg:block">
                            <ul className="flex justify-around">
                                <li>
                                    <Link href='#'>
                                        صفحه اصلی
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        دوره ها
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        نظرات دانشجویان
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        درباره ما
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="w-1/2 lg:w-1/3 flex justify-center items-center">
                        <Link href="#" className="flex bg-[#e8eaf6] px-3 py-4 rounded-2xl ml-2">
                            <Image src={`${Icone}/Cart.svg`} alt="" width={1000} height={1000} className="w-5 h-auto ml-1" />

                        </Link>
                        <Link href="/login" className="flex bg-[#e8eaf6] px-5 py-3 rounded-2xl text-[#7e57c2] p-2">
                            <Image src={`${Icone}/Login.svg`} alt="" width={1000} height={1000} className="w-5 h-auto ml-1" />

                            ورود
                        </Link>
                    </div>
                </div>
            </header>
            <div>
                {children}
            </div>
        </>
    );
};

export default Layouts;