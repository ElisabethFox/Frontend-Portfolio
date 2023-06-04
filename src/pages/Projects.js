import Project from '../components/project/Project';
import { projects } from './../helpers/projectsList';


const Projects = () => {
    return ( 
    <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {projects.map(({ title, projectId, img }) => {
                    return <Project key={projectId} title={title} img={img} index={projectId}/>
                })}
            </ul>
        </div>
    </main>
    )
};
 
export default Projects;