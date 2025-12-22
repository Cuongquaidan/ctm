"use client"
import { getProfile, logOut } from "@/lib/api/auth";
import { getCart, getTotalItemsInCart } from "@/lib/api/cart";
import { fetchWishListIds, getTotalItems } from "@/lib/api/wishlist";
import { CartT, UserT } from "@/types/common.types";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


type ContextType = {
  hasAuth: boolean,
  setHasAuth: (hasAuth: boolean) => void,
  user?: UserT | null,
  setUser?: (user: UserT | null) => void,
  numberOfStoreInCart: number,
  handleGetNumberOfStoreInCart: () => void,
  numberOfItemsInWishlist: number,
  handleGetNumberOfItemsInWishlist: () => void,
  handleLogout: () => void,
  handleGetProfile: () => void,
  handleGetIds: () => void,
  wishlistIds?: number[],
  cart?: CartT | null,
  handleGetCart: () => void,

}
const AuthContext = createContext<ContextType>({
  hasAuth: false,
  setHasAuth: () => { },
  user: null,
  setUser: () => { },
  numberOfStoreInCart: 0,
  handleGetNumberOfStoreInCart: () => { },
  numberOfItemsInWishlist: 0,
  handleGetNumberOfItemsInWishlist: () => { },
  handleLogout: () => { },
  handleGetProfile: () => { },
  handleGetIds: () => { },
  wishlistIds: [],
  cart: null,
  handleGetCart: () => { },
});

export default function AuthProvider({ children }: {
  children: React.ReactNode
}) {
  const [hasAuth, setHasAuth] = useState<boolean>(false);
  const [user, setUser] = useState<UserT | null>(null);
  const [numberOfStoreInCart, setNumberOfStoreInCart] = useState<number>(0);
  const [numberOfItemsInWishlist, setNumberOfItemsInWishlist] = useState<number>(0);
  const [wishlistIds, setWishlistIds] = useState<number[]>([]);
  const [cart, setCart] = useState<CartT | null>(null);
  const [isChecking, setIsChecking] = useState<boolean>(true);
  const pathname = usePathname();
  const router = useRouter();

  const handleGetNumberOfStoreInCart = async () => {
    const resdata = await getTotalItemsInCart();

    setNumberOfStoreInCart(resdata);
  }
  const handleGetNumberOfItemsInWishlist = async () => {
    const resdata = await getTotalItems();
    setNumberOfItemsInWishlist(resdata);
  }
  const handleGetIds = async () => {
    const resdata = await fetchWishListIds();
    setWishlistIds(resdata);
  }

  const handleGetCart = async () => {
    const resdata = await getCart();
    setCart(resdata);
  }


  const handleGetProfile = async () => {
    try {
      const res = await getProfile();
      setUser(res);
      localStorage.setItem("user", JSON.stringify(res));

    } catch (error) {
      console.error("Error fetching profile:", error);
      setUser(null);
    }
  }


  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    // Nếu có token → set hasAuth = true
    if (token) {
      setHasAuth(true);

    } else {
      setHasAuth(false);
    }

    // Redirect nếu đã login mà vào trang login/register
    if (pathname.includes("customers/login") || pathname.includes("customers/register") || pathname.includes("customers/forgotPassword") || pathname.includes("customers/confirm")) {
      if (token) {
        toast.info("Vui lòng đăng xuất để tiếp tục");
        router.replace("/");
        return;
      }
    }

    // Check auth cho các trang customers (trừ login/register/forgot-password)
    if (pathname.includes("customers") &&
      !pathname.includes("customers/login") &&
      !pathname.includes("customers/register") &&
      !pathname.includes("customers/forgotPassword") &&
      !pathname.includes("customers/confirm")
    ) {
      if (!token) {
        toast.info("Vui lòng đăng nhập để tiếp tục");
        router.replace("/customers/login");
        return;
      }
    }

    // Đã check xong, cho phép render
    setIsChecking(false);
  }, [pathname, router]);
  useEffect(() => {
    if (hasAuth) {
      handleGetProfile();
      handleGetNumberOfStoreInCart();
      handleGetNumberOfItemsInWishlist();
      handleGetIds();
      handleGetCart();
    } else {
      setUser(null);
      setWishlistIds([]);
      setCart(null);
    }
  }, [hasAuth]);
  const handleLogout = async () => {
    const data = await logOut();
    if (data) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      setHasAuth(false);

      // setUser(null); // Cập nhật state
      router.replace("/customers/login");
    }
  }

  return (
    <AuthContext.Provider value={{ hasAuth, setHasAuth, user, setUser, numberOfStoreInCart, handleGetNumberOfStoreInCart, numberOfItemsInWishlist, handleGetNumberOfItemsInWishlist, handleLogout, handleGetProfile, wishlistIds, handleGetIds, cart, handleGetCart }}>
      {
        children
      }
    </AuthContext.Provider>
  );
}

const useAuthContext = () => {
  return useContext(AuthContext);
}

export { useAuthContext };