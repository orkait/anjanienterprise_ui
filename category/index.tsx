import CategoryLayout from "@/components/CategoryLayout"
import { cylindricalProducts, mortiseProducts } from "@/data/data";
import { productListType } from "@/types/type";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const CategoryIndexPage = () => {
    const [products, setProducts] = useState<productListType>();
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;
        if (router.query) {
            if (router.query.subproduct === 'cylindrical') {
                setProducts(cylindricalProducts);
            } else if (router.query.product === 'mortise') {
                setProducts(mortiseProducts);
            }
        }
    }, [router.isReady, router.query, router.query?.subproduct])
    
    return (
        <CategoryLayout>
            Hello
        </CategoryLayout>
    )
}

export default CategoryIndexPage