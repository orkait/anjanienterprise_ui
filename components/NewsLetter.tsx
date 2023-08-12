"use client";
import axios from "axios";
import { useState } from "react"

export default function Newsletter() {

    const [email, setEmail] = useState<string>('')
    const [subscribe, setSubscribe] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const subscribeUser = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/subscribe', { email });

            if (res.data) {
                setSubscribe(true)
                setEmail('')
            } else {
                setSubscribe(false)
                setError('Something went wrong')
            }
        } catch (err) {
            console.log(err)
            setError('Something went wrong')
        }
    }

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* CTA box */}
                <div className="relative py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">

                    <div className="relative flex flex-col lg:flex-row justify-between items-center">

                        {/* CTA content */}
                        <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                            <h3 className="h3 mb-2">Stay in the loop</h3>
                            <p className=" text-lg">Join our newsletter to get top products list before anyone else.</p>
                        </div>

                        {/* CTA form */}
                        <form className="w-full lg:w-1/2">
                            <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                                <input type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full appearance-none   rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 " placeholder="Email" aria-label="Your best email…" />
                                <a className="btn   hover:bg-white shadow"
                                    onClick={subscribeUser}
                                >Subscribe</a>
                            </div>
                            {
                                subscribe && <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">
                                    Thanks for subscribing!
                                </p>
                            }

                            {/* if no email is not valid give error message */}
                            {error && <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">
                                {error}
                            </p>}
                        </form>

                    </div>

                </div>

            </div>
        </section>
    )
}
