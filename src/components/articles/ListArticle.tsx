"use client";
import { useEffect, useState } from "react";
import { getArticles } from "@/services/articleService";
import type { Article } from "@/types/main";
import { CardArticle } from "./CardArticle";

export const ListArticle = () => {
  const [listData, setListData] = useState<Article[] | null>(null); // Lưu trữ dữ liệu

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticles();
      setListData(articles); // Cập nhật trạng thái với dữ liệu API
    };
    
    fetchArticles(); // Gọi API khi component mount
  }, []); // Chỉ gọi một lần khi component mount

  if (!listData) {
    return <p>Loading...</p>; // Hiển thị khi đang tải dữ liệu
  }

  return (
    <div className="grid gap-4">
      {listData.map((article: Article) => (
        <CardArticle
          key={article.id}
          title={article.title}
          author={article.author}
          date={article.createdUpload}
          id={article.id}
          articleId={article.articleId}
        />
      ))}
    </div>
  );
};
