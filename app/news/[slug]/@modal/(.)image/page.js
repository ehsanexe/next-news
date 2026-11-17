"use client";

import { DUMMY_NEWS } from '@/dummy-news';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function ImagePage({ params }) {
    const router = useRouter();

    const newsItemSlug = params.slug;
    const newsItem = DUMMY_NEWS.find(item => item.slug === newsItemSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <div className="modal-backdrop" onClick={router.back} />

            <dialog open className="modal">
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </>
    )
}
