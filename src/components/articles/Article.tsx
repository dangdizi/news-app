import type { articleProps } from "@/types/main";

function Article({ title, author, abstract, date }: articleProps) {
  return (
    <div>
      <h4 className="block text-4xl font-semibold uppercase text-gray-500 mb-4">
        {title}
      </h4>
      <p className="my-2 text-gray-400">
        Author: {author} - {date}
      </p>
      <div className="text-lg leading-8 text-gray-700">{abstract}</div>
    </div>
  );
}

export default Article;
