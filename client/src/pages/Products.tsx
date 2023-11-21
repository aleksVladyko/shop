import CardProduct from "../components/card/CardProduct";
import FilterColor from "../components/filtered/FilterColor";
import Navbar from "../components/navbar/Navbar";
import { useFiltered, useProducts } from "../store";
import useSorted from "../utils/hooks/useSorted";
import { Product } from "../utils/types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
    const getAllProducts = useProducts((state) => state.getAllProducts);
    const [minMaxSort, setMinMaxSort] = useState<boolean>(false);
    const [isPopularSorted, setIsPopularSorted] = useState<boolean>(false);
    const [isPriceSorted, setIsPriceSorted] = useState<boolean>(false);
    const limit = import.meta.env.VITE_LIMIT;
    const pages = useProducts((state) => state.currentPage);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const pageUrl = Number(searchParams.get("page"));

    useEffect(() => {
        if (!pageUrl) {
            getAllProducts(limit, pages);
        } else {
            getAllProducts(limit, pageUrl);
        }
    }, [pages, pageUrl]);

    const filterProducts = useFiltered((state) => state.filter);
    console.log(filterProducts);
    
    let products = useProducts((state) => state.data.products);

    const sortedProducts = useSorted(
        products,
        isPopularSorted,
        isPriceSorted,
        minMaxSort
    );

    const handlePopularSort = () => {
        setIsPopularSorted(true);
        setIsPriceSorted(false);
    };

    const handlePriceSort = () => {
        setIsPopularSorted(false);
        setIsPriceSorted(true);
        setMinMaxSort((prevIsAscending) => !prevIsAscending);
    };

    products = sortedProducts.length > 0 ? sortedProducts : products || [];

    return (
        products && (
            <section className="w-full px-10 py-8 flex-col justify-start items-start gap-8 inline-flex">
                <Navbar
                    minMaxSort={minMaxSort}
                    handlePopularSort={handlePopularSort}
                    handlePriceSort={handlePriceSort}
                />
                <div className="self-stretch justify-start items-start gap-8 inline-flex">
                    <FilterColor />
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex h-[650px] overflow-y-auto">
                        {products &&
                            products.map((product: Product) => (
                                <CardProduct
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                    </div>
                </div>
            </section>
        )
    );
};
export default Products;
