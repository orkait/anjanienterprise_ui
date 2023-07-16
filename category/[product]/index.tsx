import CategoryLayout from '@/components/CategoryLayout'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const ProductIndexPage = () => {
    const [product, setProduct] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        if (router.query) {
            setProduct((router?.query?.subproduct || "") as string);
        }

    }, [router.isReady, router.query, router.query?.subproduct])
    
    return (
        <CategoryLayout>
            Product Index Page
        </CategoryLayout>
    )
}

export default ProductIndexPage