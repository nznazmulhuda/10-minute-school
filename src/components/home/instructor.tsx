"use client";

import { Award, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useData } from "@/provider/data.provider";
import { useEffect, useState } from "react";
import { Section } from "@/types/course";

export default function Instructor() {
  const [instructorData, setInstructorData] = useState<Section>();
  const { data } = useData();

  useEffect(() => {
    const filterData = data?.sections.find(
      (item) => item.type === "instructors"
    );

    if (filterData) {
      setInstructorData(filterData);
    }
  }, [data]);

  return (
    <Card className="overflow-hidden shadow-lg border border-slate-200 bg-white py-0 gap-0">
      <CardHeader className="bg-slate-800 text-white py-2 pb-0">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <User className="w-5 h-5" />
          </div>
          Course Instructors
        </CardTitle>
      </CardHeader>

      <CardContent className="p-8 bg-gradient-to-br from-slate-50 to-white pt">
        <div className="space-y-8">
          <div className="group">
            {instructorData?.values.map((instructor, idx) => (
              <div
                key={instructor.id || idx}
                className="flex items-start gap-6 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
              >
                <div className="relative">
                  <Avatar className="w-20 h-20 ring-4 ring-slate-100 group-hover:ring-slate-200 transition-all duration-300">
                    <AvatarImage
                      src={instructor?.image}
                      alt={instructor.name}
                    />
                    <AvatarFallback className="bg-slate-600 text-white text-xl font-bold">
                      {(instructor.name || "I").charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white rounded-full p-1">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    {instructor.has_instructor_page ? (
                      <a href={instructor.slug} className="">
                        <h4 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors hover:text-[#51a963] ease-in duration-200">
                          {instructor.name}
                        </h4>
                      </a>
                    ) : (
                      <h4 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                        {instructor.name}
                      </h4>
                    )}
                    <Badge
                      variant="secondary"
                      className="mt-2 bg-slate-100 text-slate-700 border-slate-200"
                    >
                      Course Instructor
                    </Badge>
                  </div>

                  {instructor?.description && (
                    <div
                      className="prose prose-sm max-w-none text-slate-600 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: instructor.description,
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
