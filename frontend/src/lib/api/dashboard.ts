import { DashboardStatItemT } from "@/types/common.types";
import { apiFetch } from "./api";
import { dashboardStats } from "@/assets/data/Dashboard";

export const getDashboardStats = async (): Promise<DashboardStatItemT[]> => {
    // const response = await apiFetch("/api/dashboard/stats");
    // return response;
    return dashboardStats;
};
