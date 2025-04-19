"use server";
import { prisma } from "@/lib/prisma";
import { put, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getArticleById } from "./data";
import { editSchema, loginSchema, uploadSchema } from "./zodSchema";
import { signIn } from "../service/auth";

export const uploadArticle = async (prevState: unknown, formData: FormData) => {
  const validateFields = uploadSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { judul, image, author, content } = validateFields.data;
  const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
  });

  try {
    await prisma.articles.create({
      data: {
        judul,
        image: url,
        author,
        content,
      },
    });
  } catch (error) {
    return { message: "Failed to create article" };
  }

  revalidatePath("/");
  redirect("/article");
};

export const deleteArticle = async (id: string) => {
  const data = await getArticleById(id);

  if (!data) return { message: "Article not found" };

  await del(data.image);
  try {
    await prisma.articles.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete article" };
  }

  revalidatePath("/dashboard/edit-article");
};

export const updateArticle = async (
  id: string,
  prevState: unknown,
  formData: FormData
) => {
  const validateFields = editSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const data = await getArticleById(id);

  if (!data) return { message: "Article no data found" };

  const { judul, image, author, content } = validateFields.data;

  let imagePath;
  if (!image || image.size <= 0) {
    imagePath = data.image;
  } else {
    await del(data.image);
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });

    imagePath = url;
  }

  try {
    await prisma.articles.update({
      data: {
        judul,
        image: imagePath,
        author,
        content,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to create article" };
  }

  revalidatePath("/dashboard/edit-article");
  redirect("/dashboard/edit-article");
};

export const login = async (prevState: unknown, formData: FormData) => {
  try {
    const validateFields = loginSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (!validateFields.success) {
      return {
        error: validateFields.error.flatten().fieldErrors,
      };
    }
    const { email, password } = validateFields.data;
    const result = await signIn("credentials", {
      email,
      password,
    });

    return result;
  } catch (error) {
    return { message: "Email Or Password is incorrect" };
  }
};
