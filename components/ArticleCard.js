import { AnnotationIcon, ClockIcon, HeartIcon } from '@heroicons/react/solid'
import { formatDate } from 'lib/utils'
import Image from 'next/image'

const ArticleCard = ({ article }) => {
    return (
        <a href={article.canonical_url} className="article group" target={'_blank'} rel={'noreferrer'}>
            <article>
                <div className="content">
                    <div className="content-inner">
                        <div>
                            <span className="min-h-[20px] text-sm block mb-1 text-purple-400 font-bold font-mono">
                                {formatDate(article.published_timestamp)}
                            </span>
                            <h3>{article.title}</h3>
                        </div>
                        <p>{article.description}</p>

                        <div className="text-sm flex items-center justify-center sm:justify-end gap-4">
                            <div className="text-sm text-gray-600 flex gap-1 items-center leading-none">
                                <HeartIcon className="w-4 h-4" />{' '}
                                <span className="mt-px">{article.positive_reactions_count}</span>
                            </div>
                            <div className="text-sm text-gray-600 flex gap-1 items-center leading-none">
                                <ClockIcon className="w-4 h-4" />{' '}
                                <span className="mt-px">{article.reading_time_minutes}</span>
                            </div>
                            <div className="text-sm text-gray-600 flex gap-1 items-center leading-none">
                                <AnnotationIcon className="w-4 h-4" />{' '}
                                <span className="mt-px">{article.comments_count}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <Image
                        src={article.cover_image}
                        alt={article.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:grayscale-0 z-20"
                    />
                </div>
            </article>
        </a>
    )
}

export default ArticleCard
