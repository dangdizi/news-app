"use client";
import { CardArticle } from "@/components/articles/CardArticle";
import { searchArticle } from "@/services/articleService";
import type { Article } from "@/types/main";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  const { keywords } = useParams();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof keywords == "string") {
        const data = await searchArticle({ keywords });
        setArticles(data);
      }
    };

    fetchData();
  }, [keywords]);
  return (
    <>
      <h4 className="block text-xl font-semibold uppercase text-gray-500 mb-1">
        search result for "{typeof keywords == "string" ? decodeURIComponent(keywords) : ""}"
      </h4>
      <p className="text-gray-400 font-semibold mb-4">"{articles.length}" result found</p>
      {articles.map((article:Article) => (
        <CardArticle
          key={article.id}
          title={article.title}
          author={article.author}
          date={article.createdUpload}
          id={article.id}
          articleId={article.articleId}
        />
      ))}
    </>
  );
}

export default page;
