import { deleteArticle } from "../lib/action";
import DeleteLoadingBtn from "./delete-loading-btn";

export default function DeleteButton({ id }: { id: string }) {
  const deleteArticleById = async (formData: FormData) => {
    "use server";
    await deleteArticle(id);
  };
  return (
    <form
      action={deleteArticleById}
      className="bg-red-800 text-white p-3 cursor-pointer"
    >
      <DeleteLoadingBtn />
    </form>
  );
}
