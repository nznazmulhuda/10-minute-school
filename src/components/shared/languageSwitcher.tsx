"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("en");

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-lg py-1 px-2">
      <Globe className="w-4 h-4 text-gray-600" />

      <Button
        variant={currentLang === "en" ? "default" : "ghost"}
        size="sm"
        className={`h-8 px-3 text-xs font-medium transition-colors ${
          currentLang === "en"
            ? "bg-blue-600 text-white"
            : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
        }`}
        onClick={() => setCurrentLang("en")}
      >
        <Link href={"/en"}>English</Link>
      </Button>

      <Button
        variant={currentLang === "bn" ? "default" : "ghost"}
        size="sm"
        className={`h-8 px-3 text-xs font-medium transition-colors ${
          currentLang === "bn"
            ? "bg-blue-600 text-white"
            : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
        }`}
        onClick={() => setCurrentLang("bn")}
      >
        <Link href={"/bn"}>বাংলা</Link>
      </Button>
    </div>
  );
}
