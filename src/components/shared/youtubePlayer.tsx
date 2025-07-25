"use client";

import Image from "next/image";
import { useState } from "react";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  thumbnail?: string;
}

export function YouTubePlayer({
  videoId,
  title,
  thumbnail,
}: YouTubePlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(thumbnail);

  if (!videoId) {
    return (
      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Invalid YouTube URL</p>
      </div>
    );
  }

  return (
    <div className="aspect-video rounded-lg overflow-hidden bg-black">
      {!isLoaded && (
        <div
          className="relative w-full h-full cursor-pointer group"
          onClick={() => setIsLoaded(true)}
        >
          <Image
            src={
              thumbnail ||
              `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
            }
            alt={title || "Video thumbnail"}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />

          <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {isLoaded && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title || "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      )}
    </div>
  );
}
