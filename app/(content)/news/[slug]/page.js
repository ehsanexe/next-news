import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
    const { slug } = params;
    const newsItem = DUMMY_NEWS.find(item => item.slug === slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${newsItem.slug}/image`}>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </Link>
                <h1>{newsItem.title}</h1>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}