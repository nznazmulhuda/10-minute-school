import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Data } from "@/types/course";
import { BanknoteArrowDown } from "lucide-react";
import Image from "next/image";

export default function CheckList({ data }: { data: Data }) {
  return (
    <Card className="overflow-hidden shadow-lg border border-slate-200 bg-white py-0">
      <CardHeader className="bg-[#1d293d] py-2 pb-0">
        <CardTitle className="flex items-center gap-3 text-white">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <BanknoteArrowDown className="w-5 h-5" />
          </div>
          Check Lists
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <ul className="space-y-3">
          {data?.checklist.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              {<Image src={item.icon} alt={item.text} width={18} height={18} />}
              <span className={`text-sm text-gray-900`}>{item.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
