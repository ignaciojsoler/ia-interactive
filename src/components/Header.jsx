import Menu from './Menu';
import Logo from '../assets/logo.png'
import FacebookIcon from '../assets/facebook.png'
import InstagramIcon from '../assets/instagram.png'
import YoutubeIcon from '../assets/youtube.png'

const Header = ({ setDisplayNavigationMenu }) => {
    return (
        <header className='header'>
            <nav className='navbar'>
                <img src={Logo} alt="logo" />
                <div className='navbar__links'>
                    <ul>
                        <li>
                            <a href="">Nuestros productos</a>
                        </li>
                        <li>
                            <a href="">Disfruta cuidarte</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">
                                <img src={FacebookIcon} alt="Icono de Facebook" />
                            </a>
                            <a href="">
                                <img src={InstagramIcon} alt="Icono de Instagram" />
                            </a>
                            <a href="">
                                <img src={YoutubeIcon} alt="Icono de Youtube" />
                            </a>
                        </li>
                    </ul>
                </div>
                <Menu setDisplayNavigationMenu={setDisplayNavigationMenu} />
            </nav>
        </header>
    );
};

export default Header;