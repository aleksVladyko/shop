// type Partial<T> = {
//     [P in keyof T]?: T[P];
//   };
export type Props  = {
    product?: Product
    colors?: string[];
    name?: string;
    price?: number;
    image?: string;
    desc?: string;
    id?: number | string;
};

export type ColorArray = string[];

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

export type Colors = {
    color: string;
    name: string;
    visible?: boolean;
};
