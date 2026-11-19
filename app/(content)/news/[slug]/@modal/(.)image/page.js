
import ModalBackdrop from '@/components/modal-backdrop';
import { getNewsItem } from '@/lib/news';

export default async function ImagePage({ params }) {

    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <ModalBackdrop />
            <dialog open className="modal">
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </>
    )
}
