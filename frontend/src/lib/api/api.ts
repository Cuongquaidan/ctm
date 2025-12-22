import { toast } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_CUSTOMERS || "";

// Flag để track toast đã được hiển thị hay chưa
let sessionExpiredToastShown = false;

// Function để reset flag khi user login lại
export function resetSessionExpiredFlag() {
    sessionExpiredToastShown = false;
}

export function buildURIWithQueries(
    path: string,
    queries?: { [key: string]: any }
): string {
    if (!queries || Object.keys(queries).length === 0) {
        return path;
    }

    const params = new URLSearchParams();
    Object.entries(queries).forEach(([key, value]) => {
        if (value) {
            if (Array.isArray(value)) {
                value.forEach((val) => {
                    params.append(key, String(val));
                });
            } else {
                params.append(key, String(value));
            }
        }
        if (typeof value === "boolean") {
            params.append(key, value ? "true" : "false");
        }
    });

    const queryString = params.toString();

    return queryString ? `${path}?${queryString}` : path;
}

export async function apiFetch(uri: string, options?: any) {
    const accessToken = sessionStorage.getItem("accessToken");

    const res = await fetch(`${BASE_URL}/${uri}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            ...options.headers,
        },
    });

    if (res.status === 401) {
        sessionStorage.removeItem("accessToken");
        window.location.href = "/login?expired=true";
        return;
    }

    return res.json();
}

export async function apiFetchFullUrl(fullUrl: string, options?: any) {
    const accessToken =
        typeof window !== "undefined"
            ? localStorage.getItem("accessToken")
            : null;
    const res = await fetch(fullUrl, {
        ...options,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            ...options.headers,
        },
    });

    if (res.status === 401) {
        if (typeof window !== "undefined") {
            localStorage.removeItem("accessToken");
            window.location.href = "/login?expired=true";
        }
        return;
    }

    return res.json();
}

const BASE_URL_SITES = process.env.NEXT_PUBLIC_BASE_URL_SITES || "";

export async function apiFetchSites(uri: string, options?: any) {
    try {
        if (!BASE_URL_SITES) {
            console.error("BASE_URL_SITES is not configured");
            return null;
        }

        const url = `${BASE_URL_SITES}${uri}`;
        const res = await fetch(url, {
            ...options,
            headers: {
                ...options?.headers,
            },
        });

        if (!res.ok) {
            console.log(`HTTP error! status: ${res.status}`);
            return null;
        }

        const resjson = await res.json();
        if (resjson.status === 400) {
            toast.error(resjson.message || "Lỗi khi lấy dữ liệu");
        }
        return resjson.data;
    } catch (error) {
        console.log("apiFetchSites error:", error);
        return null;
    }
}

const BASE_URL_CUSTOMERS = process.env.NEXT_PUBLIC_BASE_URL_CUSTOMERS || "";

export async function apiFetchCustomers(uri: string, options?: any) {
    try {
        if (!BASE_URL_CUSTOMERS) {
            console.error("BASE_URL_CUSTOMERS is not configured");
            return null;
        }

        const accessToken =
            typeof window !== "undefined"
                ? localStorage.getItem("accessToken")
                : null;
        const url = `${BASE_URL_CUSTOMERS}${uri}`;
        const res = await fetch(url, {
            ...options,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Secret-Key": `${process.env.NEXT_PUBLIC_SECRET_KEY_CUSTOMERS}`,
                ...options?.headers,
            },
        });

        const resjson = await res.json();

        // Xử lý JWT expired hoặc unauthorized
        if (
            resjson.msg === "jwt expired" ||
            resjson.status === 401 ||
            res.status === 401
        ) {
            if (typeof window !== "undefined") {
                localStorage.removeItem("accessToken");

                // Chỉ hiển thị toast 1 lần duy nhất
                if (!sessionExpiredToastShown) {
                    sessionExpiredToastShown = true;
                    toast.error(
                        "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại."
                    );
                    setTimeout(() => {
                        window.location.href = "/customers/login?expired=true";
                    }, 3000); // Delay 1s để user đọc được toast
                }
            }
            return;
        }

        if (!res.ok) {
            console.log(`HTTP error! status: ${res.status}`);
            return null;
        }

        if (resjson.status === 400) {
            toast.error(resjson.msg || "Lỗi khi lấy dữ liệu");
        }
        if (resjson.status === 403) {
            toast.error(
                resjson.msg || "Bạn không có quyền truy cập tài nguyên này"
            );
        }
        if (resjson.status === 404) {
            toast.error("Không tìm thấy tài nguyên yêu cầu");
        }
        if (resjson.status === 500) {
            toast.error("Lỗi máy chủ, vui lòng thử lại sau");
        }
        return resjson.data;
    } catch (error) {
        console.log(error);

        return null;
    }
}
