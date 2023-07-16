import CategoryLayout from '@/components/CategoryLayout'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { cylindricalProducts, mortiseProducts } from '@/data/data';
import { productListType, singleProductListType } from '@/types/type';
import CardGroup from '@/components/CardGroup';


const SubProductIndexPage = () => {
    const [products, setProducts] = useState<productListType>();
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;
        if (router.query.subproduct) {
            if (router.query.subproduct === 'cylindrical') {
                setProducts(cylindricalProducts);
            } else if (router.query.product === 'mortise') {
                setProducts(mortiseProducts);
            }
        }
    }, [router.isReady, products])

    return (
        <CategoryLayout>
            {
                products && (
                    <CardGroup
                        productList={products}
                    />
                )
            }

        </CategoryLayout>
    )
}

export default SubProductIndexPage