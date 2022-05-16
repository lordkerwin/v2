import Container from '@/components/Container'
import { allPosts } from 'contentlayer/generated'

export async function getStaticPaths() {
    return {
        paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const post = allPosts.find((post) => post.slug === params.slug)
    return { props: { post } }
}

const Post = ({ post }) => {
    console.log(post)
    return (
        <Container>
            <h1>Post</h1>
        </Container>
    )
}

export default Post
