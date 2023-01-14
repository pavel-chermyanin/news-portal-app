import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams?: Article;
};

const ArticlePage = ({ searchParams }: Props) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;
  return (
    <article>
      <section className="flex flex-col lg:flex-row pt-4 pb-24 px-0 lg:px-10">
        {article.image && (
          <img
            className="h-50 max-w-100p mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={article.image}
            alt={article.title}
          />
        )}
        <div className="px-4 sm:px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>

          <div className="sm:flex sm:divide-x-2 sm:space-x-4">
            <h2 className="font-bold">{article.author || "unknown"}</h2>
            <h2 className="font-bold sm:pl-4">
              Source:
              <span className="text-gray-400">{" "}{article.source}</span>
            </h2>
            <p className="sm:pl-4 text-gray-400">
              <LiveTimestamp time={article.published_at} />
            </p>
          </div>

          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;
