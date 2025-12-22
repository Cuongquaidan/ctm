
"use client";
import "@/app/globals.css";
import ModalLogin from "@/components/features/modal/ModalLogin";
import AuthProvider from "@/components/features/provider/AuthProvider";
import { createContext, useContext, useState } from "react";
type ModalLoginContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ModalLoginContext = createContext<ModalLoginContextType>({
  isOpen: false,
  setIsOpen: () => { }
});

// Hook để sử dụng Context
export const useModalLogin = () => {
  const context = useContext(ModalLoginContext);
  return context;
}
export default function SitesLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <>

      <AuthProvider>
        <ModalLoginContext.Provider value={{ isOpen, setIsOpen }}>
          {children}
          {isOpen && <ModalLogin onClose={() => setIsOpen(false)} />}

        </ModalLoginContext.Provider>
      </AuthProvider>

    </>
  );
}
