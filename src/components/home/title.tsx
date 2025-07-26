import { Award, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Data } from "@/types/course";

export default function Title({ data }: { data: Data }) {
  return (
    <Card className="overflow-hidden shadow-lg border border-slate-200 bg-white py-0 gap-0">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge className="bg-blue-600 text-white">
              <Star className="w-3 h-3 mr-1" />
              Premium Course
            </Badge>
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 border-green-200"
            >
              <Award className="w-3 h-3 mr-1" />
              Certificate Included
            </Badge>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {data?.title}
          </h1>

          {data?.description && (
            <div
              className="text-lg text-gray-600"
              dangerouslySetInnerHTML={{
                __html: data?.description,
              }}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
