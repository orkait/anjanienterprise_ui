import { singleProductListType } from "@/types/type";

const Card = ({ product }: { product: singleProductListType }) => {
    return (
        <div className="max-w-[350px] md:max-w-sm rounded-[10px] p-[20px] bg-white shadow dark:bg-red-500  ">
            {
                product.productImage ? (
                    <>
                        <img
                            className="rounded-[10px] h-[250px]"
                            alt="cake"
                            src={product.productImage}
                        />
                        <h3 className="font-bold mt-5">
                            {product.productName}
                        </h3>
                    </>
                ) : (
                    <>
                        <div className="min-w-[200px] min-h-[200px] grid place-content-center ">
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Card