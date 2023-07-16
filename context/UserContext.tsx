import * as React from 'react';

export const UserContext = React.createContext<{
    categoryName: string;
    setCategoryName: React.Dispatch<React.SetStateAction<string>>;

    subCategory: {
        name: string;
        url: string;
    }[],
    setSubCategory: React.Dispatch<React.SetStateAction<{
        name: string;
        url: string;
    }[]>>;

}>({
    categoryName: "",
    subCategory: [],
    setCategoryName: () => { },
    setSubCategory: () => { },
});