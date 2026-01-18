import { getNewsForYear } from "@/lib/news";
import NewsList from "@/components/news-list";

const FilteredNewsPage = ({ params: { year } }) => {
  const newsItems = getNewsForYear(year);

  return <NewsList newsItems={newsItems} />;
};

export default FilteredNewsPage;
