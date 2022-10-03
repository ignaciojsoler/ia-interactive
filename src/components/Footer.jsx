import logoDanone from '../assets/logo-danone.png'
import logoFooter from '../assets/logo-footer.png'

const Footer = () => {
    return (
        <footer>
                <div className='logos'>
                    <img src={logoDanone} alt="Logo de Danone" />
                    <img src={logoFooter} alt="Logo de Vitalínea" />
                </div>
                <div className='text'>
                    <h6>Términos y condiciones| Políticas de privacidad | Aviso de privacidad</h6>
                    <h5>Danone de México 2017 ©. Todos los derechos reservados 2017</h5>
                </div>
        </footer>
    );
};

export default Footer;