import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { YouTubePlayer } from "../shared/youtubePlayer";
import { Data } from "@/types/course";

export default function Trailer({ data }: { data: Data }) {
  const trailerVideo = data?.media.find(
    (item) => item.resource_type === "video"
  );

  return (
    <section>
      <Card className="overflow-hidden shadow-lg border border-slate-200 bg-white py-0">
        <CardHeader className="bg-slate-800 text-white py-2 pb-0">
          <CardTitle className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Star className="w-5 h-5" />
            </div>
            Course Trailer
          </CardTitle>
        </CardHeader>

        <CardContent className="px-6 pb-6">
          {trailerVideo ? (
            <YouTubePlayer
              videoId={trailerVideo.resource_value}
              title={trailerVideo.name}
              thumbnail={trailerVideo.thumbnail_url}
            />
          ) : (
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center shadow-inner">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-slate-300 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <p className="text-slate-500 font-medium">
                  Trailer Coming Soon
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
