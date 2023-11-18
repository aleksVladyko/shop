import { useState, useEffect } from "react";
import { Product } from "../../utils/types";

const useSorted = (
    products: Product[],
    isPopularSorted: boolean,
    isPriceSorted: boolean,
    minMaxSort: boolean
) => {
    const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

    const sortPopularProducts = () => {
        setSortedProducts((prevSortedProducts) =>
            prevSortedProducts
                .slice()
                .sort((a, b) => b.popularity - a.popularity)
        );
    };

    const sortPriceProducts = () => {
        setSortedProducts((prevSortedProducts) =>
            prevSortedProducts
                .slice()
                .sort((a, b) =>
                    minMaxSort ? a.price - b.price : b.price - a.price
                )
        );
    };

    useEffect(() => {
        if (isPopularSorted) {
            sortPopularProducts();
        } else if (isPriceSorted) {
            sortPriceProducts();
        } else {
            setSortedProducts([...products]);
        }
    }, [products, isPopularSorted, isPriceSorted, minMaxSort]);

    return sortedProducts;
};

export default useSorted;
