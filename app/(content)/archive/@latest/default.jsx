import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news-list";

const LatestNewsPage = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList newsItems={latestNews} />
    </>
  );
};

export default LatestNewsPage;
