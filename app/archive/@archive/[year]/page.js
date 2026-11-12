import NewsList from '@/components/news-list'
import React from 'react'
import { getNewsForYear } from '@/lib/news'

export default function FilteredNewsPage({params}) {

    const newsYear = params.year;
    const news = getNewsForYear(newsYear);
  return (
    <NewsList news={news} />
  )
}
