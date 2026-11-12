import NewsList from '@/components/news-list'
import React from 'react'
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news'
import Link from 'next/link';

export default function FilteredNewsPage({ params }) {

    const filter = params.filter;

    console.log({ filter })

    const selectedYear = filter ? filter[0] : undefined;
    const selectedMonth = filter ? filter[1] : undefined;

    let links = getAvailableNewsYears();
    let news = [];

    if (selectedYear && !selectedMonth) {
        links = getAvailableNewsMonths(selectedYear);
        news = getNewsForYear(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        links = [];
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    }


    return (
        <>
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
            {news.length > 0 && <NewsList news={news} />}
            {news.length === 0 && <p>No news found for the selected filter.</p>}
        </>
    )
}
