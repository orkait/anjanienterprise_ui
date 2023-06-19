import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const inter = Inter({ subsets: ['latin'] })

import React, { useEffect } from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';

const ComingSoon = () => {
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
    }, [])
    return (
        <div className="w-full h-screen flex items-center justify-center prose">
            <div className="absolute bg-gradient-to-r  bg-white opacity-75 inset-0 z-[-1]"></div>
            <div className="w-full max-w-md  ">
                <div className="flex flex-col items-center bg-neutral-50  p-10 rounded-md shadow-lg ">
                    <Image src="/logo.png" width={300} height={200} alt="logo" />
                    <h1 className="mt-4">
                        Coming Soon
                    </h1>
                    <h2 className="mt-4 text-center ">
                        We are working hard to launch the website soon.
                    </h2>
                    <button className='btn text-red-500 mt-5 ' >
                        <Image
                            width={50}
                            height={50}
                            className='w-6 h-6 m-0'
                            src='./whatsapp_icon.svg'
                            alt='whatsapp'
                        />
                        <span className='text-lg mx-2'>
                            +91 9769623292
                        </span>
                    </button>

                </div>
            </div>
        </div>
    );
};



export default function Home() {
    return (
        <div className="flex flex-col items-center mx-[40px] md:mx-auto my-0">
            <ComingSoon />
        </div>
    )
}
