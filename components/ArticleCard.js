import { AnnotationIcon, ClockIcon, HeartIcon } from '@heroicons/react/solid'
import Image from 'next/image'

const ArticleCard = ({ article }) => {
    return (
        <article>
            <h3>{article.title}</h3>

            <div className="text-sm flex items-center gap-4">
                <span className="text-sm text-gray-600">{article.readable_publish_date}</span>
                <div className="text-sm text-gray-600 flex gap-1 items-center leading-none">
                    <HeartIcon className="w-4 h-4" /> <span className="mt-px">{article.positive_reactions_count}</span>
                </div>
                <div className="text-sm text-gray-600 flex gap-1 items-center leading-none">
                    <ClockIcon className="w-4 h-4" /> <span className="mt-px">{article.reading_time_minutes}</span>
                </div>
                <div className="text-sm text-gray-600 flex gap-1 items-center leading-none">
                    <AnnotationIcon className="w-4 h-4" /> <span className="mt-px">{article.comments_count}</span>
                </div>
            </div>

            <p>{article.description}</p>
        </article>
    )
}

export default ArticleCard
