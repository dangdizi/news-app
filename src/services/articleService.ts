import type { findArticleByIdProps } from "@/types/main";
import axios from "axios";
import { getAbstract } from "./pubmedService";

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
    console.log(pubmedId);
    const data = await getAbstract(pubmedId);
    const responseEntity = {
      title: response.data.data.title,
      author: response.data.data.author,
      date: response.data.data.createdUpload,
      abstract: data.abstract,
    };

    return responseEntity;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null; // Nếu có lỗi, trả về null
  }
}
