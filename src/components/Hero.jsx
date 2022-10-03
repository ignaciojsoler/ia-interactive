import bottle from '../assets/bottle.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import arrow from '../assets/arrow.png'
import Fade from 'react-reveal/Fade';

const Hero = () => {

    return (

            <main className='hero' id='hero'>
        <Fade bottom>
                <div className='hero__img'>
                    <img src={bottle} alt="Bottle of Vitalinea" />
                </div>

                <div className='hero__right'>
                    <div className='hero__flavors'>
                        <h5>Sabor: </h5>
                        <button className='picker__selected'>Fresa</button>
                        <button className='picker'>Guayaba</button>
                        <button className='picker'>Toronja</button>
                    </div>

                    <div className='hero__description'>
                        <h3>Vitalínea® Bebible Fresa 217 gr.</h3>
                        <p>¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de las personas que siempre están activas y quieren probar algo sano, rico y práctico.</p>
                        <button>Comprar en Walmart</button>
                    </div>

                    <div className='hero__icons'>
                        <img src={icon1} alt="Logo de la Federación Mexicana de Diabetes, A.C." />
                        <img src={icon2} alt="Menos de 100 kcal." />
                    </div>

                </div>
                </Fade>
                <div className='hero__scroll-button'>
                    <a href="#info">
                        <img src={arrow} alt="Flecha" />
                    </a>
                </div>
            </main>
       
    );
};

export default Hero;