import Container from '@/components/Container'
import { allProjects } from 'contentlayer/generated'
import { pick } from 'lib/utils'

export function getStaticProps() {
    const projects = allProjects
        .map((project) => pick(project, ['title', 'publishedAt', 'slug']))
        .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

    return { props: { projects } }
}

const Projects = ({ projects }) => {
    console.log(projects)
    return (
        <Container title="Projects">
            <h1>projects</h1>
        </Container>
    )
}

export default Projects
