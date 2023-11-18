export type Props = {
    colors?: string[];
    name?: string;
    price?: number;
    image?: string;
    desc?: string;
    id?: number | string;
};

type ColorArray = string[];

export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    colors: ColorArray;
    popularity: number;
    desc: string;
};

export type Products = {
    products: Product[];
};
export type NavbarProps = {
    handlePriceSort?: () => void;
    handlePopularSort?: () => void;
    minMaxSort?: boolean;
        currentPage?: number
        setCurrentPage?: React.Dispatch<React.SetStateAction<number>>
};
