import './style.css';
import gitHub from './gitHub-black.svg';

const BtnGitHub = ({ link }) => {
    return ( 
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHub} alt="" />
            GitHub repo
        </a>
    );
}
 
export default BtnGitHub;