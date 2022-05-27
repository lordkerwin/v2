import ArticleCard from '@/components/ArticleCard'

const Articles = ({ articles }) => {
    return (
        <div id="articles" className="fp-section">
            <h2 className="section-title">Articles</h2>

            <div className="flex flex-col gap-10 sm:gap-16">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    )
}

export default Articles
