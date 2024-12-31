"use client";

import { useEffect, useState } from "react";
import { getArticle } from "@/services/articleService";
import { useParams } from "next/navigation";
import type { articleProps } from "@/types/main";
import Article from "@/components/articles/Article";

const ArticlePage = () => {
  let { id } = useParams(); // Lấy id từ URL
  const [articleData, setArticleData] = useState<articleProps | null>(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const data = await getArticle({ id });
        if (data) {
          setArticleData(data);
        }
      };

      fetchData();
    }
  }, [id]);

  if (!articleData) {
    return <div>Loading...</div>; // Hiển thị khi dữ liệu chưa được tải
  }

  return <>
    <Article title={articleData.title} author={articleData.author} date={articleData.date} abstract={articleData.abstract} />
  </>;
};

export default ArticlePage;
