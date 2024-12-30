import { getArticles } from "@/services/articleService"
import type { Article } from "@/types/main";
import { CardArticle } from "./CardArticle";

export const ListArticle = async () => {
    const listData = await getArticles();
    console.log(listData);
  return (
      <div className="grid">
          {
              listData?.map((article: Article) => (
                  <CardArticle title={article.title} author={article.author} date={article.createdUpload} id={article.id} articleId={article.articleId} />
              ))
          }
    </div>
  )
}
