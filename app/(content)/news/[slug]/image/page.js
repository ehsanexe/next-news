import { getNewsItem } from '@/lib/news';
import React from 'react'

export default async function ImagePage({ params }) {

    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    )
}
