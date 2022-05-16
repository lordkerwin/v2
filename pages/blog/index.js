import Container from '@/components/Container'
import { allPosts } from 'contentlayer/generated'
import { pick } from 'lib/utils'

export function getStaticProps() {
    const posts = allPosts
        .map((post) => pick(post, ['title', 'publishedAt', 'slug', 'summary', 'image']))
        .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

    return { props: { posts } }
}

const Blog = ({ posts }) => {
    console.log(posts)
    return (
        <Container title="Blog">
            <h1>Blog</h1>
        </Container>
    )
}

export default Blog
