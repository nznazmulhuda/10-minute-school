import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Award, CheckCircle, Play } from "lucide-react";
import { Data, Section } from "@/types/course";

export default function ExclusiveFeature({ data }: { data: Data }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-amber-200 bg-white p-0 gap-0">
      <CardHeader className="bg-amber-600 text-white relative overflow-hidden pt-2">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-90"></div>
        <CardTitle className="flex items-center gap-3 text-xl relative z-10">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Award className="w-6 h-6" />
          </div>
          {
            data?.sections.find((item) => item.type === "feature_explanations")
              ?.name
          }
        </CardTitle>
      </CardHeader>

      <CardContent className="p-8 bg-gradient-to-br from-amber-50 to-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data?.sections
            .find((item) => item.type === "feature_explanations")
            ?.values.map((feature, featureIndex) => (
              <div key={feature.id || featureIndex} className="group space-y-6">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center">
                    {feature.file_url ? (
                      <img
                        src={feature.file_url || "/placeholder.svg"}
                        alt={feature.title || "Feature"}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                      />
                    ) : (
                      <div className="text-amber-400">
                        <Play className="w-16 h-16" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors cursor-default">
                    {feature.title}
                  </h4>

                  {feature.checklist && (
                    <div className="space-y-2">
                      {feature.checklist.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start gap-2 p-2 rounded-lg hover:bg-white transition-colors cursor-pointer"
                        >
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
