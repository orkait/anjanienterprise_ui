import { UserContext } from "@/context/UserContext";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext, useState } from "react";

const Accordian = (
    {
        categoryName,
        subCategory,
    }: {
        categoryName: string,
        subCategory: {
            name: string
            url: string
        }[]
    }) => {

    const [accordion, setAccordion] = useState<boolean>(false);

    return (
        <div
            className={`
            collapse rounded-none
            ${subCategory ? 'collapse-arrow' : ''} 
            bg-base-100 ${accordion ? 'collapse-active' : 'collapse-close'}`}

        >
            <input type="radio" name="my-accordion-3"
                onClick={() => {
                    setAccordion(!accordion)
                }}
            />
            <div className="collapse-title w-full text-xl font-medium flex flex-row w-[300px] items-center  ">
                <FontAwesomeIcon
                    icon={faAnglesRight}
                    color="#aaa"
                    size='sm'
                />
                <span className='ml-3'>
                    {categoryName}
                </span>
            </div>
            <div className="collapse-content  ">
                {
                    subCategory.map((item, index) => {
                        return (

                            <Link
                                href={`/category/${categoryName}/${item.url}`}
                                key={index}
                                passHref={true}
                            >

                                <div
                                    className='my-2 p-2 ml-5 hover:bg-base-300 cursor-pointer flex flex-row items-center '
                                >
                                    <FontAwesomeIcon
                                        icon={faAnglesRight}
                                        color="#aaa"
                                        size='sm'
                                    />
                                    <span className='ml-2'>
                                        {item.name}
                                    </span>
                                </div>
                            </Link>

                        )
                    })
                }
            </div>
        </div>
    )
}

const CategoryLayout = ({ children }: { children: React.ReactNode }) => {
    const { categoryName, subCategory } = useContext(UserContext);
    return (
        <div className="flex flex-row ">
            <div className="flex w-1/3 test p-2 ">
                <Accordian
                    categoryName={categoryName}
                    subCategory={subCategory}
                />
            </div>
            <div className="flex w-2/3 test p-3 ">
                {children}
            </div>
        </div>
    )
}

export default CategoryLayout