import { shallow } from "zustand/shallow";
import { getAllProducts } from "../utils";
import { createWithEqualityFn } from "zustand/traditional";
import { Product } from "../utils/types";
import { combine, persist } from "zustand/middleware";
import { create } from "zustand";

export type UseProducts = {
    data: {
        products: Product[];
        totalPages?: number;
    };
    currentPage: number;
    setCurrentPage: (value: number) => void;
    product: Product;
    loading: boolean;
    getAllProducts: (limit: number, page: number) => Promise<void>;
};

export const useProducts = createWithEqualityFn<UseProducts>()(
    persist(
        (set) => ({
            data: {
                products: [],
            },
            product: {
                id: 0,
                name: "",
                price: 0,
                image: "",
                colors: [],
                popularity: 0,
                desc: "",
            },
            currentPage: 1,
            loading: false,
            getAllProducts: async (limit, page) => {
                set({ loading: true, currentPage: page });
                const products = await getAllProducts(limit, page);
                set({ data: products, loading: false, currentPage: page });
            },
            setCurrentPage: async (page) => {
                set({
                    loading: true,
                    currentPage: page,
                });
            },
        }),
        shallow
    )
);

type SortedState = {
    isPopularSorted: boolean;
    isPriceSorted: boolean;
    setPopularSorted: (value: boolean) => void;
    setPriceSorted: (value: boolean) => void;
};

export const useSorted = create<SortedState>(
    combine(
        {
            isPopularSorted: false,
            isPriceSorted: false,
        },
        (set) => ({
            setPopularSorted: (value) => set({ isPopularSorted: value }),
            setPriceSorted: (value) => set({ isPriceSorted: value }),
        })
    )
);

type TFiltered = {
    filter: string;
    setFilter: (value: string) => void;
};

export const useFiltered = create<TFiltered>((set) => ({
    filter: "",
    setFilter: (value) =>
        set({
            filter: value,
        }),
}));
