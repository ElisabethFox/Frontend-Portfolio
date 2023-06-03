import './style.css';

import gitHub from './../../img/icons/gitHub.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import telegram from './../../img/icons/telegram.svg';
import mail from './../../img/icons/mail.svg';

const Footer = () => {
    return ( 
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="sosial__item">
                        <a href="#!"><img src={gitHub} alt="link" /></a>
                    </li>
                    <li className="sosial__item">
                        <a href="#!"><img src={linkedIn} alt="link" /></a>
                    </li>
                    <li className="sosial__item">
                        <a href="#!"><img src={telegram} alt="link" /></a>
                    </li>
                    <li className="sosial__item">
                        <a href="#!"><img src={mail} alt="link" /></a>
                    </li>
                </ul>
                <div className="copywrite">
                    <p>© 2023 Elisabeth</p>
                </div>
            </div>
        </div>
    </footer>
    );
}
 
export default Footer;