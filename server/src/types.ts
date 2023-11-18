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

export type Products = [products: Product[]];

export type Cart = {
    id: number;
    cartProduct: Product;
};
