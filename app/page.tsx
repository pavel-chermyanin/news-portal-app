import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";

async function HomePage() {
  // fetch the news data
  // const news: NewsResponse = await fetchNews(categories.join(","));
  return (
    <div>
      {/* <NewsList news={news} /> */}
    </div>
    // NewsList news
  );
}

export default HomePage;
