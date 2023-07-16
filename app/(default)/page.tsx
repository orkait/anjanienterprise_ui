export const metadata = {
    title: 'Home - Open PRO',
    description: 'Page description',
}

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Newsletter from '@/components/NewsLetter'
import Zigzag from '@/components/ZigZag'
import Testimonials from '@/components/Testimonials'
import { zigzagSectionHeader, zigzagSectionHeaderItems } from '@/data/zigzig.data'
import { featureSectionHeader, featureSectionItems } from '@/data/feature.data';
import { testimonialHeaderData, testimonialListData } from '@/data/testimonial.data'

export default function Home() {
    return (
        <>
            <Hero />
            <Features
                featureSectionHeader={featureSectionHeader}
                featureSectionItem={featureSectionItems}
            />
            <Zigzag
                zigzagSectionHeader={zigzagSectionHeader}
                zigzagSectionHeaderItems={zigzagSectionHeaderItems}
            />
            <Testimonials 
                testimonialHeader={testimonialHeaderData}
                testimonialList={testimonialListData}
            />
            <Newsletter />
        </>
    )
}
