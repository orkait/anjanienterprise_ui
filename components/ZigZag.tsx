
import Image from 'next/image'

export default function Zigzag({ zigzagSectionHeader, zigzagSectionHeaderItems }) {

    const FeatureImage = (item, index: number) => {
        console.log("item -->", item)
        return (
            <div
                className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 ${index % 2 === 1 ? 'rtl' : ''}`}
                data-aos="fade-up"
            >
                <Image
                    className="max-w-full mx-auto md:max-w-none max-h-[400px] "
                    src={item.image}
                    width={540}
                    height={400}
                    alt={`Features ${index + 1}`}
                />
            </div>
        )
    }

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h1 mb-4 text-2xl font-extrabold aos-init aos-animate">{zigzagSectionHeader.title}</h1>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">
                        {zigzagSectionHeaderItems.map((item, index) => (
                            <div
                                className="md:grid md:grid-cols-12 md:gap-6 items-center"
                                key={index}
                            >
                                {
                                    item.direction === 'left' && (
                                        <div
                                            className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 ${index % 2 === 1 ? 'rtl' : ''}`}
                                            data-aos="fade-up"
                                        >
                                            <Image
                                                className="max-w-full mx-auto md:max-w-none object-scale-down shadow-2xl "
                                                src={item.image}
                                                width={540}
                                                height={400}
                                                alt={`Features ${index + 1}`}
                                            />
                                        </div>
                                    )
                                }

                                {/* Content */}
                                <div
                                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                                >
                                    <div className="md:pl-4 lg:pl-12 xl:pl-16">

                                        <h2 className='font-bold text-lg '>{item.title}</h2>
                                        <p className="text-xl text-gray-400 mb-4">{item.description}</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            {item.features.map((feature, i) => (
                                                <li className="flex items-center mb-2" key={i}>
                                                    <svg
                                                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                        viewBox="0 0 12 12"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                    </svg>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {
                                    item.direction === 'right' && (
                                        <div
                                            className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 ${index % 2 === 1 ? 'rtl' : ''}`}
                                            data-aos="fade-up"
                                        >
                                            <Image
                                                className="max-w-full mx-auto md:max-w-none object-scale-down shadow-2xl "
                                                src={item.image}
                                                width={540}
                                                height={400}
                                                alt={`Features ${index + 1}`}
                                            />
                                        </div>
                                    )
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
