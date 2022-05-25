import ProjectCard from '@/components/ProjectCard'

const Projects = ({ projects }) => {
    const latestProject = projects[0]
    const otherProjects = projects.slice(1, 4)

    return (
        <div id="projects" className="fp-section">
            <h2 className="text-2xl font-bold text-white">Projects</h2>

            <div className="flex flex-col gap-12 sm:gap-20 mt-20">
                <ProjectCard project={latestProject} hero />
                {otherProjects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects
