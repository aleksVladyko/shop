import { shallow } from "zustand/shallow";
import { getAllProducts } from "../utils";
import { createWithEqualityFn } from "zustand/traditional";
import { Product } from "../utils/types";
import { combine, persist } from "zustand/middleware";
import { create } from "zustand";

export type UseProducts = {
    data: {
        products: Array<Product>;
        totalPages?: number;
    };
    currentPage: number;
    setCurrentPage: (value: number) => void;
    loading: boolean;
    getAllProducts: (limit: number, page: number) => Promise<void>;
};

export const useProducts = createWithEqualityFn<UseProducts>()(
    persist(
        (set) => ({
            data: {
                products: [],
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
    minMaxSort: boolean;
    filter: string;
    visible: boolean;
    setFilter: (value: string) => void;
    setMinMaxSort: (value: boolean) => void;
    setPopularSorted: (value: boolean) => void;
    setPriceSorted: (value: boolean) => void;
};

export const useSorted = create<SortedState>(
    combine(
        {
            isPopularSorted: false,
            isPriceSorted: false,
            minMaxSort: false,
            filter: "",
            visible: false,
        },
        (set) => ({
            setPopularSorted: (value) => set({ isPopularSorted: value }),
            setPriceSorted: (value) => set({ isPriceSorted: value }),
            setMinMaxSort: (value) => set({ minMaxSort: value }),
            setFilter: (value) =>
                set({
                    filter: value,
                    visible: value !== "" ? true : false,
                }),
        })
    )
);
