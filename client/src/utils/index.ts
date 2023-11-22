import { Product } from "../utils/types";

export const getAllProducts = async (
    limit: number,
    page: number
): Promise<Product[]> => {
    try {
        const apiUrl = import.meta.env.VITE_API_URL;
        if (!apiUrl || typeof apiUrl !== "string") {
            throw new Error("Invalid API URL");
        }
        const response = await fetch(`${apiUrl}/?limit=${limit}&page=${page}`);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getProductId = async (
    id: number | string
): Promise<Product | undefined> => {
    try {
        const apiUrl = import.meta.env.VITE_API_URL;
        if (!apiUrl || typeof apiUrl !== "string") {
            throw new Error("Invalid API URL");
        }
        const response = await fetch(`${apiUrl}/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch product");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};

export class ProductSorted {
    static sortPopularProducts = (data: Product[] | undefined) => {
        return data?.sort((a, b) => b.popularity - a.popularity);
    };
    static sortByMinPrice(data: Product[] | undefined) {
        return data?.sort((a, b) => a.price - b.price);
    }

    static sortByMaxPrice(data: Product[] | undefined) {
        return data?.sort((a, b) => b.price - a.price);
    }
}
