"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";
import { useData } from "@/provider/data.provider";
import { Section } from "@/types/course";

export default function About() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));
  const { data } = useData();
  const [section, setSection] = useState<Section>();

  useEffect(() => {
    const isSection = data?.sections.find((item) => item.type === "about");

    if (isSection) {
      setSection(isSection);
    }
  }, [data]);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-200 bg-white p-0 gap-0">
      <CardHeader className="bg-blue-600 text-white relative overflow-hidden pt-2">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-90"></div>
        <CardTitle className="flex items-center gap-3 text-xl relative z-10">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <FileText className="w-6 h-6" />
          </div>
          {section?.name || "Course details"}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <div className="space-y-0">
          {section?.values.map((about, index) => (
            <div
              key={about.id || index}
              className="border-b border-gray-100 last:border-b-0"
            >
              <button
                className="w-full text-left p-6 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 flex items-center justify-between group  cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <div className="flex-1">
                  {about.title && (
                    <div
                      className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors"
                      dangerouslySetInnerHTML={{ __html: about.title }}
                    />
                  )}
                </div>

                <div className="flex-shrink-0 ml-4">
                  {openItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-indigo-600 transition-colors" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-indigo-600 transition-colors" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 bg-gradient-to-r from-indigo-50/30 to-purple-50/30">
                  {about.description && (
                    <div
                      className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: about.description }}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
