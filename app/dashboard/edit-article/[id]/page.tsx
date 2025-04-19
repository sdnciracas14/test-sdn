import EditArticle from "@/common/layouts/edit-form";
import { getArticleById } from "@/common/lib/data";
import { notFound } from "next/navigation";

export default async function ArticleEditPage({ params }: any) {
  const { id } = await params;
  const data = await getArticleById(id);

  if (!data) return notFound();
  return (
    <section>
      <EditArticle data={data} />
    </section>
  );
}
