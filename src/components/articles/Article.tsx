import type { articleProps } from "@/types/main";
import Link from "next/link";

function Article({ title, author, abstract, date, url }: articleProps) {
  return (
    <div className="p-4">
      <h4 className="block text-4xl font-semibold uppercase text-gray-500 mb-4">
        {title}
      </h4>
      <p className="my-2 text-gray-400">
        Author: {author} - {date}
      </p>
      <div className="text-lg leading-8 text-gray-700">{abstract}</div>
      <div className="mt-8 flex items-center justify-between">
        <p className="text-gray-400 font-semibold">Source: NCBI PUBMED API</p>
        <Link className="text-blue-300 duration-150 hover:text-blue-400" href={url}>View original page {">>>"}</Link>
      </div>
    </div>
  );
}

export default Article;
