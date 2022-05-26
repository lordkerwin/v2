import Container from '@/components/Container'
import AboutMe from '@/components/AboutMe'
import Welcome from '@/components/Welcome'
import { allProjects } from 'contentlayer/generated'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Articles from '@/components/Articles'

export async function getStaticProps() {
    const response = await fetch('https://dev.to/api/articles/latest?username=seankerwin&per_page=5')
    const articles = await response?.json()

    const projects = allProjects.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

    return { props: { projects, articles } }
}

export default function Home({ articles, projects }) {
    return (
        <Container>
            <div className="flex flex-col gap-y-20">
                <Welcome />
                <AboutMe />
                <Projects projects={projects} />
                <Articles articles={articles} />
                <Contact />
            </div>
        </Container>
    )
}
