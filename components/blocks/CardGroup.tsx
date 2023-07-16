import { productListType } from "@/types/type";
import Card from "@/components/blocks/Card";
import Link from "next/link";

const CardGroup = ({ productList }: { productList: productListType }) => {
    return (
        <div className="flex gap-5 flex-wrap justify-center  ">
            {
                productList.map((product, index) => {
                    return (
                        <Link
                            href={'/category/' + product.productURL}
                            key={index}>
                            <Card product={product} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default CardGroup