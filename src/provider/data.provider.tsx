"use client";

import { DataContext } from "@/context/data.context";
import { getCourseData } from "@/lib/api";
import { Data } from "@/types/course";
import { ReactNode, useContext, useEffect, useState } from "react";

export default function DataProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getCourseData(language);

      if (fetchedData) setData(fetchedData);
      else setData(null);
    };

    fetchData();
  }, [language]);

  const dataValue = {
    data,
    setLanguage,
  };

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
}

// hook: to use data context's value
export const useData = () => {
  const data = useContext(DataContext);

  return data;
};
