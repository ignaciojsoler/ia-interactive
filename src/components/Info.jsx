import React from 'react';
import Table from './Table';
import Fade from 'react-reveal/Fade';

const Info = () => {

    return (
        <article className='info' id='info'>
                <Fade left>
                <h3>Información nutrimental</h3>
                </Fade>
                <Fade right>
                <div className='info__content'>
                    <div className='info__text'>
                        <h5>Vitalínea® Bebible Guayaba 217gr<br />
                            Valor promedio por porción de 217gr<br />
                            Porciones por envase: 1<br />
                        </h5>
                        <div>
                            <h5>Ingredientes:</h5>
                            <p>Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos lácticos.</p>
                        </div>
                    </div>

                    <Table />
                </div>
            </Fade>
        </article>
    );
};

export default Info;