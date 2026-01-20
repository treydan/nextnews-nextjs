import { getAllNews } from "@/lib/news";
import NewsList from "@/components/news-list";

const NewsPage = async () => {
  const news = getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList newsItems={news} />
    </>
  );
};

export default NewsPage;
