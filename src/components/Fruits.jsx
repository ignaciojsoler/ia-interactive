import React from 'react';
import fresa2 from '../assets/fresa2.png'
import fresa3 from '../assets/fresa3.png'
import fresa4 from '../assets/fresa4.png'
import fresa5 from '../assets/fresa5.png'
import fresa6 from '../assets/fresa6.png'
import fresa7 from '../assets/fresa7.png'
import fresa8 from '../assets/fresa8.png'
import fresa9 from '../assets/fresa9.png'

const Fruits = () => {
    return (
        <div className='strawberries'>
            <img src={fresa2} alt="Imagen de una fresa" className='strawberry2' />
            <img src={fresa3} alt="Imagen de una fresa" className='strawberry3' />
            <img src={fresa4} alt="Imagen de una fresa" className='strawberry4' />
            <img src={fresa5} alt="Imagen de una fresa" className='strawberry5' />
            <img src={fresa6} alt="Imagen de una fresa" className='strawberry6'/>
            <img src={fresa7} alt="Imagen de una fresa" className='strawberry7'/>
            <img src={fresa8} alt="Imagen de una fresa" className='strawberry8'/>
            <img src={fresa9} alt="Imagen de una fresa" className='strawberry9'/>
        </div>
    );
};

export default Fruits;