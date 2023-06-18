import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const inter = Inter({ subsets: ['latin'] })

import React from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ComingSoon = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center prose">
            <div className="absolute bg-gradient-to-r  bg-white opacity-75 inset-0 z-[-1]"></div>
            <div className="w-full max-w-md  ">
                <div className="flex flex-col items-center bg-[#fff] p-10 rounded-md shadow-lg ">
                    <Image src="/logo.png" width={300} height={200} alt="logo" />
                    <h1 className="mt-4">
                        Coming Soon
                    </h1>
                    <h2 className="mt-4 text-center ">
                        We are working hard to launch the website soon.
                    </h2>
                    <button className='btn btn-outline mt-5' >
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            size="2x"
                        />
                        <span className='text-lg mx-2'>
                            +91 97696 23292
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
