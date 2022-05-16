import Container from '@/components/Container'
import { allProjects } from 'contentlayer/generated'

export async function getStaticPaths() {
    return {
        paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const project = allProjects.find((project) => project.slug === params.slug)
    return { props: { project } }
}

const Project = () => {
    console.log(project)
    return (
        <Container>
            <h1>Project</h1>
        </Container>
    )
}

export default Project
