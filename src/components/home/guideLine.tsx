"use client";

import { useData } from "@/provider/data.provider";
import { Card } from "../ui/card";

export default function GuideLine() {
  const { data } = useData();

  return data?.sections
    .find((item) => item.type === "group_join_engagement")
    ?.values?.map((engagement, idx) => (
      <Card key={engagement.id || idx} className="overflow-hidden py-0">
        <div
          className="relative p-6 text-white"
          style={{
            backgroundImage: engagement.background?.image
              ? `url(${engagement.background.image})`
              : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <h2
                className="text-2xl font-bold"
                style={{ color: engagement.title_color || "#ffffff" }}
              >
                {engagement.title}
              </h2>
              <p
                className="text-lg"
                style={{ color: engagement.description_color || "#e5e7eb" }}
              >
                {engagement.description}
              </p>
              <button
                className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() =>
                  window.open(engagement.cta?.clicked_url, "_blank")
                }
              >
                {engagement.cta?.text || "Download"}
              </button>
            </div>
            {engagement.thumbnail && (
              <div className="flex justify-center">
                <img
                  src={engagement.thumbnail || "/placeholder.svg"}
                  alt={engagement.title}
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </Card>
    ));
}
