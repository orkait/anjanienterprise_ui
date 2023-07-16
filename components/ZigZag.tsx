
import Image from 'next/image'

export default function Zigzag({ zigzagSectionHeader, zigzagSectionHeaderItems }) {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        {zigzagSectionHeader.tag && (
                            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                                {zigzagSectionHeader.tag}
                            </div>
                        )}
                        <h1 className="h2 mb-4">{zigzagSectionHeader.title}</h1>
                        <p className="text-xl text-gray-400">{zigzagSectionHeader.description}</p>
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
                                                className="max-w-full mx-auto md:max-w-none h-auto"
                                                src={item.image}
                                                width={540}
                                                height={405}
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
                                        {item.subtitle && (
                                            <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                                {item.subtitle}
                                            </div>
                                        )}
                                        <h3 className="h3 mb-3">{item.title}</h3>
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
                                                className="max-w-full mx-auto md:max-w-none h-auto"
                                                src={item.image}
                                                width={540}
                                                height={405}
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
