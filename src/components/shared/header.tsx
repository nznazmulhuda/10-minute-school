import Link from "next/link";
import { Clock, Users } from "lucide-react";
import LanguageSwitcher from "./languageSwitcher";
import { Badge } from "../ui/badge";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-slate-200 sticky top-0 z-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <main className="flex items-center justify-between">
          <aside className="flex items-center gap-4">
            <Link href={"/"} className="flex items-center gap-4">
              <Image
                src={
                  "https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                }
                alt="Logo"
                width={140}
                height={50}
                className="cursor-pointer"
              />
            </Link>
          </aside>

          <aside className="flex items-center gap-6">
            <LanguageSwitcher />

            <div className="flex items-center gap-4">
              <Badge
                variant={"outline"}
                className="bg-emerald-50 text-emerald-700 border-emerald-200 px-3 py-1"
              >
                <Clock className="w-4 h-4 mr-2" />
                Lifetime Access
              </Badge>

              <Badge
                variant={"outline"}
                className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1"
              >
                <Users className="w-4 h-4 mr-2" />
                14M+ Students
              </Badge>
            </div>
          </aside>
        </main>
      </section>
    </header>
  );
}
