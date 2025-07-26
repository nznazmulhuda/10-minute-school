import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import { getCourseData } from "@/lib/api";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const seo = await getCourseData("en");

  return (
    <html lang="en">
      <head>
        <title>{seo?.seo?.title || "Default Title"}</title>

        <meta name="description" content={seo?.seo?.description} />

        {seo?.seo?.defaultMeta?.map((meta, index: number) => {
          const TagProps =
            meta.type === "property"
              ? { property: meta.value, content: meta.content }
              : { name: meta.value, content: meta.content };

          return <meta key={index} {...TagProps} />;
        })}

        <meta name="keywords" content={seo?.seo?.keywords?.join(", ")} />

        {seo?.seo?.schema?.map((item, idx: number) =>
          item?.meta_value ? (
            <script
              key={idx}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: item.meta_value }}
            />
          ) : null
        )}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* header */}
        <Header />

        {children}
      </body>
    </html>
  );
}
