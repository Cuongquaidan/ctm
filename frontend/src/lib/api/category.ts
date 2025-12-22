import { categoryMenuData } from "@/assets/data/Home";
import { CategoryT, CategoryTV0 } from "@/types/common.types";
import {
    apiFetch,
    apiFetchFullUrl,
    apiFetchSites,
    buildURIWithQueries,
} from "@/lib/api/api";
import { PaginatedDataT } from "@/types/api.type";
export type QueriesT = {
    nameSh?: string;
    hotSh?: number;
    pageLen?: number;
    page?: number;
    store_idSh?: number;
    category_idsSh?: number;
    [key: string]: any;
};
export const getAllCategories = async (): Promise<CategoryTV0[]> => {
    // const res = await apiFetch("/categories");
    // return res;

    return categoryMenuData as unknown as CategoryTV0[];
};

export const getAllCategoriesByUrl = async (
    uri: string,
    id?: number[]
): Promise<CategoryT[]> => {
    const res = await apiFetchSites(uri, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            category_ids: id,
        }),
    });

    // API returns {data: [...], status: 200}, extract the data array
    if (
        res &&
        typeof res === "object" &&
        "data" in res &&
        Array.isArray(res.data)
    ) {
        return res.data;
    }

    // Fallback if structure is different
    return Array.isArray(res) ? res : [];
};

export const getAllCategoriesV2 = async (queries?: {
    [key: string]: any;
}): Promise<CategoryTV0[]> => {
    // const uri = buildURIWithQueries('/categories', queries);
    // const res = await apiFetch(uri);
    // return res.data;
    return [
        {
            name: "Vegetables & Fruit",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/vegetable.svg",
            slug: "vegetables-and-fruit",
            children: [],
        },
        {
            name: "Beverages",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/cup.svg",
            slug: "beverages",
            children: [],
        },
        {
            name: "Meats & Seafood",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/meats.svg",
            slug: "meats-and-seafood",
            children: [],
        },
        {
            name: "Breakfast",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/breakfast.svg",
            slug: "breakfast",
            children: [],
        },
        {
            name: "Frozen Foods",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/frozen.svg",
            slug: "frozen-foods",
            children: [],
        },
        {
            name: "Milk & Dairies",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/milk.svg",
            slug: "milk-and-dairies",
            children: [],
        },
        {
            name: "Pet Food",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/pet.svg",
            slug: "pet-food",
            children: [],
        },
        {
            name: "Biscuits & Snacks",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/biscuit.svg",
            slug: "biscuits-and-snacks",
            children: [],
        },
        {
            name: "Grocery & Staples",
            link: "shop-left-sidebar.html",
            image: "/assets/eme2023/svg/1/grocery.svg",
            slug: "grocery-and-staples",
            children: [],
        },
    ];
};

export const getAllCategoriesPaginated = async (
    queries?: QueriesT
): Promise<PaginatedDataT<CategoryT>> => {
    const uri = buildURIWithQueries("/categories/getList", queries);
    const resdata = await apiFetchSites(uri);
    return resdata;
};
export const getAllCategoriesNoPaginated = async (
    queries?: QueriesT
): Promise<CategoryT[]> => {
    const uri = buildURIWithQueries("/categories/getList", {
        ...queries,
        isPaginated: false,
    });
    const resdata = await apiFetchSites(uri);
    return resdata;
};

export const getCategoryByAlias = async (
    alias: string,
    queries?: QueriesT
): Promise<CategoryT> => {
    const uri = buildURIWithQueries(`/categories/detail/${alias}`, queries);
    const resdata = await apiFetchSites(uri);
    return resdata;
};

export const getCategoriesByParentIdNoPaginated = async (
    parentId: number
): Promise<CategoryT[]> => {
    const uri = buildURIWithQueries("/categories/getList", {
        isPaginated: false,
        parentIdSh: parentId,
    });
    const resdata = await apiFetchSites(uri);

    return resdata;
};
