import ArticleCard from '@/components/ArticleCard'

const Articles = ({ articles }) => {
    return (
        <div id="articles" className="fp-section">
            <h2 className="text-3xl font-bold text-white pt-10">Articles</h2>

            <div className="flex flex-col gap-10 sm:gap-16 mt-12">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    )
}

export default Articles
