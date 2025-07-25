"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState("en");

  const switchLanguage = (lang: "en" | "bn") => {
    setCurrentLang(lang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    router.push(url.pathname + url.search);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-lg py-1 px-2">
      <Globe className="w-4 h-4 text-gray-600" />

      <Button
        variant={currentLang === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => switchLanguage("en")}
        className={`h-8 px-3 text-xs font-medium transition-colors ${
          currentLang === "en"
            ? "bg-blue-600 text-white"
            : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
        }`}
      >
        English
      </Button>

      <Button
        variant={currentLang === "bn" ? "default" : "ghost"}
        size="sm"
        onClick={() => switchLanguage("bn")}
        className={`h-8 px-3 text-xs font-medium transition-colors ${
          currentLang === "bn"
            ? "bg-blue-600 text-white"
            : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
        }`}
      >
        বাংলা
      </Button>
    </div>
  );
}
