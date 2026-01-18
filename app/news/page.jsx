import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewsList newsItems={DUMMY_NEWS} />
    </>
  );
};

export default NewsPage;
