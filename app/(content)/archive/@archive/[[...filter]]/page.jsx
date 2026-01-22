import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import { Suspense } from "react";
import Link from "next/link";
import NewsList from "@/components/news-list";

const FilterHeader = async ({ year, month }) => {
  let availableNewsYears = await getAvailableNewsYears();
  let links = availableNewsYears;

  if (
    (year && !availableNewsYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  if (month) {
    links = [];
  } else if (year) {
    links = getAvailableNewsMonths(year);
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const FilteredNews = async ({ year, month }) => {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period</p>;
  if (news) newsContent = <NewsList newsItems={news} />;

  return newsContent;
};

const FilteredNewsPage = async ({ params: { filter } }) => {
  const [selectedYear, selectedMonth] = filter ?? [];

  return (
    <>
      <Suspense fallback={<p>Loading filters...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default FilteredNewsPage;
