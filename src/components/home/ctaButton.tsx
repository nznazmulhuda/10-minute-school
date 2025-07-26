import { Award, Clock, BanknoteArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Data } from "@/types/course";

export default function CtaButton({ data }: { data: Data }) {
  return (
    <Card className="overflow-hidden shadow-lg border border-emerald-200 bg-white py-0">
      <CardHeader className="bg-[#007a55] text-white py-2 pb-0">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <BanknoteArrowDown className="w-5 h-5" />
          </div>
          Course Price
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <div className="text-5xl font-bold text-emerald-600">৳1,000</div>
            <div className="text-sm text-slate-500">
              One-time payment • Lifetime access
            </div>
          </div>

          <Button
            size="lg"
            className="w-full h-14 text-lg font-bold bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center text-white"
          >
            <Award />
            {data?.cta_text?.name || "Enroll Now"}
          </Button>

          <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Lifetime Access
            </div>

            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Certificate
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
