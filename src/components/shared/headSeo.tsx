import { HeadSeoProps } from "@/types/course";
import Head from "next/head";

export default function HeadSeo({
  title,
  description,
  keywords,
  defaultMeta,
  schema,
}: HeadSeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {defaultMeta.map((meta, index) => (
        <meta
          key={index}
          {...{ [meta.type]: meta.value }}
          content={meta.content}
        />
      ))}

      {schema
        .filter((item) => item.meta_value)
        .map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: item.meta_value }}
          />
        ))}
    </Head>
  );
}
