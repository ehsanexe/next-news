import NewsList from '@/components/news-list'
import React, { Suspense } from 'react'
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news'
import Link from 'next/link';

const Header = async ({ selectedYear, selectedMonth }) => {

    const availableYears = await getAvailableNewsYears();

    let links = availableYears;


    if (selectedYear && !selectedMonth) {
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        links = [];
    }

    if (selectedYear && !availableYears.includes(selectedYear)) {
        throw new Error(`Invalid year: ${selectedYear}`);
    }

    if (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth)) {
        throw new Error(`Invalid month: ${selectedMonth} for year: ${selectedYear}`);
    }

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => {
                        const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
                        return (
                            <li key={link}>
                                <Link href={href}>{link}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export const FilteredNews = async ({ selectedYear, selectedMonth }) => {

    let news = [];

    if (selectedYear && !selectedMonth) {
        news = await getNewsForYear(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    }

    return (
        <>
            {news.length > 0 && <NewsList news={news} />}
            {news.length === 0 && <p>No news found for the selected filter.</p>}
        </>
    )
}

export default async function FilteredNewsPage({ params }) {

    const filter = params.filter;


    const selectedYear = filter ? filter[0] : undefined;
    const selectedMonth = filter ? filter[1] : undefined;

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Header selectedYear={selectedYear} selectedMonth={selectedMonth} />
                <FilteredNews selectedYear={selectedYear} selectedMonth={selectedMonth} />
            </Suspense>
        </>
    )
}
