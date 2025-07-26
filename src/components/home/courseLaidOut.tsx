import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Data } from "@/types/course";
import Image from "next/image";

export default function CourseLeadOut({ data }: { data: Data }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-emerald-200 bg-white p-0 gap-0">
      <CardHeader className="bg-emerald-600 text-white relative overflow-hidden pt-2">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 opacity-90"></div>

        <CardTitle className="flex items-center gap-3 text-xl relative z-10">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <BookOpen className="w-6 h-6" />
          </div>
          {data?.sections.find((item) => item.type === "features")?.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-8 bg-gradient-to-br from-emerald-50 to-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.sections
            .find((item) => item.type === "features")
            ?.values.map((feature, featureIndex) => (
              <div
                key={feature.id || featureIndex}
                className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-100 hover:border-emerald-200"
              >
                <div className="flex items-start gap-4">
                  {feature.icon && (
                    <div className="flex-shrink-0 p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors">
                      <Image
                        src={feature.icon}
                        alt={"feature icon"}
                        width={32}
                        height={32}
                      />
                    </div>
                  )}
                  <div className="flex-1 space-y-3">
                    <h4 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
