import './style.css';

const Project = ({ title, img, gitHubLink }) => {
    return (
    <li className="project">
        <a href={gitHubLink}>
            <img src={img} alt={title} className="project__img" />
            <h3 className="project__title">{title}</h3>
        </a>
    </li>
    );
}
 
export default Project;