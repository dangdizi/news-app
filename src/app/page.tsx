import { CardArticle } from "@/components/articles/CardArticle";
import { ListArticle } from "@/components/articles/ListArticle";

export default async function Home() {
  return (
    <div className="contain">
      <h4 className="block text-xl font-semibold uppercase text-gray-500 mb-4">
        Recent post
      </h4>
      <ListArticle></ListArticle>
      {/* <CardArticle title="" author="" date="" articleId="" url="" />
       */}
    </div>
  );
}
