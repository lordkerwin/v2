import ProjectCard from '@/components/ProjectCard'

const Projects = ({ projects }) => {
    return (
        <div id="projects" className="fp-section">
            <h2 className="section-title">Projects</h2>
            <div className="flex flex-col gap-12 sm:gap-20">
                {projects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects
