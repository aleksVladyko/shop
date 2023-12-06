import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardProduct from "../components/card/CardProduct";
import FilterColor from "../components/filtered/FilterColor";
import Navbar from "../components/navbar/Navbar";
import { useProducts, useSorted } from "../store";
import { ProductSorted } from "../utils";
import { Product } from "../utils/types";
import ErrorPages from "./ErrorPages";

const Products = () => {
    const getAllProducts = useProducts((state) => state.getAllProducts);
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

    const getColor = useSorted((state) => state.filter);

    // делаем сортировку
    const isPopularSorted = useSorted((state) => state.isPopularSorted);
    const isPriceSorted = useSorted((state) => state.isPriceSorted);
    const minmax = useSorted((state) => state.minMaxSort);

    const products = useProducts((state) => {
        switch (true) {
            case isPopularSorted:
                return ProductSorted.sortPopularProducts(state.data.products);

            case isPriceSorted:
                return ProductSorted.sortByMaxPrice(state.data.products);

            case minmax:
                return ProductSorted.sortByMinPrice(state.data.products);
            case getColor !== "":
                return ProductSorted.filterColorProduct(
                    state.data.products,
                    getColor
                );
            default:
                return state.data.products;
        }
    });

    if (!Array.isArray(products)) {
        return <ErrorPages />;
    }
    return (
        <section className="w-full px-10 py-8 flex-col justify-start items-start gap-8 inline-flex">
            <Navbar />
            <div className="self-stretch justify-start items-start gap-8 inline-flex">
                <FilterColor />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex h-[764px] overflow-y-auto">
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
    );
};
export default Products;
