import Link from "next/link";
import newsItems from "@/constants/news-items";

const NewsListPage = () => {
  return (
    <>
      <h1>Latest News</h1>
      <ul>
        {newsItems.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <Link href={`/news/${item.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsListPage;
