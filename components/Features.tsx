import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Features({ featureSectionHeader, featureSectionItem }) {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">{featureSectionHeader.title}</h2>
                        <p className="text-xl text-gray-400">{featureSectionHeader.description}</p>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
                        {featureSectionItem.map((item, index) => (
                            <div
                                className="relative flex flex-col items-center"
                                data-aos="fade-up"
                                data-aos-delay={100 * index}
                                data-aos-anchor="[data-aos-id-blocks]"
                                key={index}
                            >
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    className="w-12 h-12 text-purple-600"
                                />

                                <h4 className="h4 mb-2">{item.title}</h4>
                                <p className="text-lg text-gray-400 text-center">{item.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Features;