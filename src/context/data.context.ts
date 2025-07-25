"use client";

import { Data } from "@/types/course";
import { createContext } from "react";

export const DataContext = createContext<{ data: Data | null }>({ data: null });
