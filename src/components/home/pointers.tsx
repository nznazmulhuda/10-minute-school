import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle, Star } from "lucide-react";
import { Data } from "@/types/course";

export default function Pointer({ data }: { data: Data }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-200 bg-white p-0 gap-0">
      <CardHeader className="bg-blue-600 text-white relative overflow-hidden pt-2">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-90"></div>
        <CardTitle className="flex items-center gap-3 text-xl relative z-10">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Star className="w-6 h-6" />
          </div>
          {data?.sections.find((item) => item.type === "pointers")?.name ||
            "What you will learn"}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4 bg-gradient-to-br from-blue-50 to-white">
        <div>
          {data?.sections
            .find((item) => item.type === "pointers")
            ?.values.map((pointer, pointerIndex) => (
              <div
                key={pointer.id || pointerIndex}
                className="group flex items-start gap-4 p-2 cursor-pointer rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-emerald-500 group-hover:text-emerald-600 transition-colors" />
                </div>
                <p className="text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors">
                  {pointer.text}
                </p>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
