import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import NewsList from "@/components/news-list";

const FilteredNewsPage = ({ params: { filter } }) => {
  const [selectedYear, selectedMonth] = filter ?? [];

  let newsItems;
  let links = getAvailableNewsYears();

  if (selectedMonth) {
    newsItems = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  } else if (selectedYear) {
    newsItems = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)) ||
    filter?.length > 2
  ) {
    throw new Error("Invalid filter.");
  }

  let newsContent = <p>No news found for the selected period</p>;
  if (newsItems) newsContent = <NewsList newsItems={newsItems} />;

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default FilteredNewsPage;
