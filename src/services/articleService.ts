import axios from "axios";
import { getAbstract } from "./pubmedService";
import { prisma } from "@/utils/prisma";
import { url } from "inspector";

export async function getArticles() {
  try {
    const response = await axios.get("/api/articles");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getArticle({
  id,
}: {
  id: string | string[] | undefined;
}) {
  try {
    const response = await axios.get(`/api/article/${id}`);
    const pubmedId = response.data.data.articleId;
    const data = await getAbstract(pubmedId);
    const responseEntity = {
      title: response.data.data.title,
      author: response.data.data.author,
      date: response.data.data.createdUpload,
      abstract: data.abstract,
      url: response.data.data.url
    };

    return responseEntity;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null; // Nếu có lỗi, trả về null
  }
}

export async function searchArticle({keywords}:{keywords: string}) {
  try {
    const response = await axios.get(`/api/search/${keywords}`);
    return response.data;
  } catch (error) {
    return null;
  }
}
