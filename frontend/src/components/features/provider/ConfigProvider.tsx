"use client"
import { getSiteConfig } from "@/lib/api/config";
import { SiteConfigT } from "@/types/common.types";
import { createContext, useContext, useEffect, useState } from "react";


type ConfigContextType = {
  config: SiteConfigT,
  setConfig: (config: SiteConfigT) => void,
}
const ConfigContext = createContext<ConfigContextType>({
  config: {} as SiteConfigT,
  setConfig: () => { },
})


export default function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfigT>({} as SiteConfigT);
  const handleFetchConfig = async () => {
    try {

      const resdata = await getSiteConfig();
      setConfig(resdata);
    } catch (error) {
      console.error("❌ Error fetching site config:", error);
    }
  }
  useEffect(() => {
    handleFetchConfig();
  }, []);



  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  )
}

export const useConfig = () => useContext(ConfigContext);