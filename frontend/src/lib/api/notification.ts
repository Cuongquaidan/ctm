import { notifications } from "@/assets/data/Notification";
import { apiFetch } from "./api";
import { NotificationT } from "@/types/common.types";

export const getAllNotifications = async (
    tab?: string
): Promise<NotificationT[]> => {
    // Nếu có tab, filter theo tab
    // const params = new URLSearchParams();
    // if (tab) params.append('tab', tab);
    // const res = await apiFetch(`/api/notifications?${params.toString()}`);
    // return res;

    if (tab) {
        return notifications.filter((n) => {
            if (tab === "all") return true;
            return n.type === tab.toUpperCase();
        });
    }
    return notifications;
};

export const markNotificationAsRead = async (notificationId: string) => {
    // const res = await apiFetch(`/api/notifications/${notificationId}/read`, {
    //     method: "POST",
    // });
    // return res;
    return true;
};

export const getAllSystemNotifications = async (): Promise<NotificationT[]> => {
    // const res = await apiFetch('/api/notifications/system');
    // return res;
    return notifications;
};

export const getAllSystemNotificationsByUrl = async (
    url: string
): Promise<NotificationT[]> => {
    // const res = await apiFetchFullUrl(url);
    // return res;
    return notifications;
};
