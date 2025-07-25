import type { ApiResponse, Data } from "@/types/course";

interface NextFetchRequestInit extends RequestInit {
  next?: {
    revalidate?: number;
    tags?: string[];
  };
}

export async function getCourseData(lang: "en" | "bn" = "en"): Promise<Data> {
  try {
    const response = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          accept: "application/json",
        },
        next: { revalidate: 3600 },
      } as NextFetchRequestInit
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch course data: ${response.status}`);
    }

    const apiResponse: ApiResponse = await response.json();
    return apiResponse.data;
  } catch (error) {
    console.error("Error in getCourseData:", error);
    throw error;
  }
}
