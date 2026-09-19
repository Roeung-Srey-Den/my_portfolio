import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/images/footer/Vector.png'

function Footer(props) {
    return (
        <footer className='w-full'>
            <div className='flex flex-col items-center gap-2 pt-6 sm:pt-8'>
                <ul className='flex justify-center gap-5'>
                    <li>
                        <a href="https://web.facebook.com/sreyden.roeung" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2" />
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/roeungsreyden" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTelegram} size="2x" color="#E1306C" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Roeung-Srey-Den/RoeungSreyDen" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" color="#333" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:roeungsreyden.biu@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" color="#555" />
                        </a>
                    </li>
                </ul>

                <div className='flex justify-center items-center text-sm text-gray-500'>
                    <h6>Roeung Srey den 2026</h6>
                </div>
            </div>

            <img src={logo} alt="" className='w-full h-auto -mt-1' />
        </footer>
    );
}

export default Footer;