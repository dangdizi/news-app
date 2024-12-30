import type { cardArticleProps } from "@/types/home/CardArticle";
import Link from "next/link";

export const CardArticle = ({title, author, date, articleId, id}:cardArticleProps) => {
    return (
      <div className="bg-white shadow duration-150 hover:shadow-md rounded relative group border flex items-stretch overflow-hidden">
        {/* card article render */}
        <div className="py-4 px-4 flex-1">
          <h3 className="line-clamp-2 text-md font-semibold text-gray-600 duration-150 hover:text-[#6daeef] cursor-pointer">
            {title}
          </h3>
          <p className="flex items-center gap-2 mt-4 text-sm text-gray-500">
            <span>author: {author}</span>
            {"-"}
            <span>{date}</span>
          </p>
        </div>
  
        <Link href={"#"} className="min-h-full duration-150 translate-x-full group-hover:translate-x-0 w-24 cursor-pointer flex items-center justify-center font-semibold text-white bg-gray-400 hover:bg-gray-300">
          {">>>"}
        </Link>
      </div>
    );
  };
  