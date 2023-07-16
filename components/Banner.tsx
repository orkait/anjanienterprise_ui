'use client'

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Banner() {
    const [bannerOpen, setBannerOpen] = useState<boolean>(false)

    return (
        <>

            <div className="fixed bottom-2 right-2 md:bottom-8 md:right-12 z-60 flex items-center justify-center cursor-pointer select-none  ">
                <div
                    className=" text-sm text-primary-content font-semibold  p-3 rounded-full shadow shadow-green-500 flex justify-center items-center bg-green-500 m-auto text-center "
                    onClick={() => setBannerOpen(!bannerOpen)}
                >
                    {
                        bannerOpen && (
                            <span className='mx-2'>
                                +91 9769623292
                            </span>
                        )
                    }
                    <FontAwesomeIcon
                        icon={faWhatsapp}
                        size='2x'
                    />
                </div>
            </div>


        </>
    )
}
