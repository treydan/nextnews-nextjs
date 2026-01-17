import newsItems from "@/constants/news-items";

const NewsDetailPage = ({ params: { id } }) => {
  const newsItem = newsItems.find((item) => item.id === parseInt(id));

  return (
    <>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.content}</p>
    </>
  );
};

export default NewsDetailPage;
