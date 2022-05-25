import ArticleCard from '@/components/ArticleCard'

const Articles = ({ articles }) => {
    console.log(articles)
    return (
        <div id="articles" className="fp-section">
            <h2 className="text-2xl font-bold text-white">Articles</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 mt-20">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    )
}

export default Articles
