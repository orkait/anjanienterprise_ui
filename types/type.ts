type SingleProductType = {
    productTitle: string,
    productLink: string,
    productDescription: string,
    productBrandName: string,
    productHighlights: string[],
    productAttributes: string[]
    productImage: {
        thumbnailURL: string;
        imageURL: string;
    },
    productImages: {
        thumbnailURL: string;
        imageURL: string;
    }[],
}

type CategoryType = {
    categoryType: string,
    subCategory: {
        subCategoryTitle: string,
        subCategoryLink: string,
        subCategoryProducts: SingleProductType[]
    }[]
}[]

export type singleProductListType = {
    productImage: string,
    productName: string,
    productURL: string,
};

export type productListType = singleProductListType[];

export const productExample: CategoryType = [
    {
        categoryType: "Curtain Accessories",
        subCategory: [
            {
                subCategoryTitle: "Brass Curtain Brackets",
                subCategoryLink: "https://metcraftchitra.com/products/30/1/brass-curtain-brackets",
                subCategoryProducts: [
                    {

                        productTitle: "TEMPLE",
                        productLink: "https://metcraftchitra.com/products/30/1/brass-curtain-brackets",
                        productDescription: "These designer Brass Curtain Brackets will give a royal treatment to your window display. Chitra Enterprises is a unique collection of sculptural artworks which translate into functional hardware for use into homes,offices and intitutional projects. Our Curtain brackets are designed and manufactured by our proficient professionals using premium quality brass material and superior technology. We provide these brackets in various unique designs, shapes and Finishes.",
                        productBrandName: "Chitra",
                        productHighlights: [
                            'Material: Brass, Color: Copper Gold, Silver, Antique Marval, Copper Marval With Finish: Glossy And Vintage Design That Gives Awesome Look',
                            'Quality and Design: Highly Durable, Rust Proof Quality and Beautiful design best to give trendy look to your home.',
                            'Suitable For Rod-Pocket Style Curtains And 1 Inch Rod',
                            'Easy ti Install: These Curtain Brackets come with mounting screws with provide easy installation of these brackets.',
                            'PACKAGE CONTENTS : Curtain Brackets :- 2 Pcs, and Fitting Assembly'
                        ],
                        productAttributes: [
                            'Material: Brass',
                            'Brand - Chitra',
                            'Manufacturer - Chitra Enterprises',
                            'Included Components - Curtain Brackets :- 2 Pcs, and Fitting Assembly',
                        ],
                        productImage: {
                            thumbnailURL: "https://metcraftchitra.com/backend/data/products/332/406x406-1657618251-temple-antique-marval.jpg",
                            imageURL: "https://metcraftchitra.com/backend/data/products/332/406x406-1657618251-temple-antique-marval.jpg"
                        },
                        productImages: [
                            {
                                thumbnailURL: "https://metcraftchitra.com/backend/data/products/332/406x406-1657618251-temple-antique-marval.jpg",
                                imageURL: "https://metcraftchitra.com/backend/data/products/332/406x406-1657618251-temple-antique-marval.jpg"
                            },
                            {
                                thumbnailURL: "https://metcraftchitra.com/backend/data/products/332/406x406-1657618993-temple-ng.jpg",
                                imageURL: "https://metcraftchitra.com/backend/data/products/332/406x406-1657618993-temple-ng.jpg"
                            },
                            {
                                thumbnailURL: "https://metcraftchitra.com/backend/data/products/332/406x406-1657618999-copper-gold.jpg",
                                imageURL: "https://metcraftchitra.com/backend/data/products/332/406x406-1657618999-copper-gold.jpg"
                            },
                            {
                                thumbnailURL: "https://metcraftchitra.com/backend/data/products/332/406x406-1657619000-back.jpg",
                                imageURL: "https://metcraftchitra.com/backend/data/products/332/406x406-1657619000-back.jpg"
                            }
                        ],
                    },
                ]
            },
            {
                subCategoryTitle: "Curtain Finals",
                subCategoryLink: "https://metcraftchitra.com/products/30/1/brass-curtain-brackets",
                subCategoryProducts: [
                    {
                        productTitle: "CONE",
                        productLink: "https://metcraftchitra.com/products/30/1/brass-curtain-brackets",
                        productDescription: "These designer Brass Curtain Brackets will give a royal treatment to your window display. Chitra Enterprises is a unique collection of sculptural artworks which translate into functional hardware for use into homes,offices and intitutional projects. Our Curtain brackets are designed and manufactured by our proficient professionals using premium quality brass material and superior technology. We provide these brackets in various unique designs, shapes and Finishes.",
                        productBrandName: "Chitra",
                        productHighlights: [
                            'Material: Brass, Color: Copper Gold, Silver Gold , Antique Marval With Finish: Glossy And Vintage Design That Gives Awesome Look',
                            'Quality and Design: Highly Durable, Rust Proof Quality and Beautiful design best to give trendy look to your home.',
                            'Suitable For Rod-Pocket Style Curtains And 1 Inch Rod',
                            'Easy ti Install: These Curtain Brackets come with mounting screws with provide easy installation of these brackets.',
                            'PACKAGE CONTENTS : Curtain Brackets :- 2 Pcs, and Fitting Assembly'
                        ],
                        productAttributes: [
                            'Material: Brass',
                            'Brand - Chitra',
                            'Manufacturer - Chitra Enterprises',
                            'Included Components - Curtain Brackets :- 2 Pcs, and Fitting Assembly',
                            'Size - 1 inch',
                            'Country of Origin - India',
                            'Product Dimensions - 9.5 x 5 x 7.2 cm'
                        ],
                        productImage: {
                            thumbnailURL: "https://metcraftchitra.com/backend/data/products/339/406x406-1657620910-cone-nickle-silver.jpg",
                            imageURL: "https://metcraftchitra.com/backend/data/products/339/406x406-1657620910-cone-nickle-silver.jpg"
                        },
                        productImages: [
                            {
                                thumbnailURL: "https://metcraftchitra.com/backend/data/products/339/196x196-1657620910-cone-nickle-silver.jpg",
                                imageURL: "https://metcraftchitra.com/backend/data/products/339/196x196-1657620910-cone-nickle-silver.jpg"
                            },
                            {
                                thumbnailURL: "https://metcraftchitra.com/backend/data/products/339/406x406-1657620911-cone-coffee.jpg",
                                imageURL: "https://metcraftchitra.com/backend/data/products/339/406x406-1657620911-cone-coffee.jpg"
                            },
                            {
                                thumbnailURL: "https://metcraftchitra.com/backend/data/products/339/406x406-1657620912-cone-antique-gold.jpg",
                                imageURL: "https://metcraftchitra.com/backend/data/products/339/406x406-1657620912-cone-antique-gold.jpg"
                            },
                            {
                                thumbnailURL: "https://metcraftchitra.com/backend/data/products/339/406x406-1657621053-cone-dim.jpg",
                                imageURL: "https://metcraftchitra.com/backend/data/products/339/406x406-1657621053-cone-dim.jpg"
                            }
                        ],
                    }
                ]
            }
        ]
    },
]