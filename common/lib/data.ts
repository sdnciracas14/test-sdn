import { prisma } from "@/lib/prisma";

export const getArticle = async () => {
  try {
    const res = await prisma.articles.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res;
  } catch (error) {
    throw new Error("Failed to get article");
  }
};

export const getArticleById = async (id: string) => {
  try {
    const res = await prisma.articles.findUnique({
      where: { id },
    });

    return res;
  } catch (error) {
    throw new Error("Failed to get article");
  }
};

export const getBestArticle = async () => {
  try {
    const res = await prisma.articles.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 4,
    });

    return res;
  } catch (error) {
    throw new Error("Failed to get article");
  }
};
