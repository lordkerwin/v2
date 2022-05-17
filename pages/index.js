import Container from '@/components/Container'
import AboutMe from '@/components/AboutMe'
import Welcome from '@/components/Welcome'
import { allPosts, allProjects } from 'contentlayer/generated'
import { pick } from 'lib/utils'
import Link from 'next/link'
import Projects from '@/components/Projects'
import Posts from '@/components/Posts'
import Contact from '@/components/Contact'

export function getStaticProps() {
    const posts = allPosts
        .map((post) => pick(post, ['title', 'publishedAt', 'slug', 'summary', 'image']))
        .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

    const projects = allProjects.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

    return { props: { posts, projects } }
}

export default function Home({ posts, projects }) {
    return (
        <Container>
            <div className="flex flex-col gap-y-10">
                <Welcome />
                <AboutMe />
                <Projects projects={projects} />
                <Posts posts={posts} />
                <Contact />
            </div>
        </Container>
    )
}
