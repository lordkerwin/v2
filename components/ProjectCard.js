import Image from 'next/image'

const ProjectCard = ({ project, hero = false }) => {
    return (
        <div className="project">
            <div className="content">
                <div className="content-inner">
                    <div>
                        <span className="min-h-[20px] text-sm block mb-1 text-purple-400 font-bold font-mono">
                            {hero ? 'Latest project' : project.publishedAt}
                        </span>
                        <h3>{project.title}</h3>
                    </div>
                    <p>{project.body.raw}</p>
                    <ul className="tags mt-1">
                        {project.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="image">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default ProjectCard
