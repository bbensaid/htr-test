import ArticlePageTemplate from "@/components/ArticlePageTemplate";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Passes the slug to your Master Template
  return <ArticlePageTemplate params={Promise.resolve({ id: slug })} />;
}
