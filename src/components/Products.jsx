import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import Fade from 'react-reveal/Fade';

const Products = () => {
    return (
        <article className='products' id='products'>
            <Fade top>
            <h3>LA FAMILIA VITALÍNEA</h3>
            </Fade>
            <Fade bottom>
            <div className='products__items'>
                <div className='products__item'>
                    <img src={product1} alt="Vitalínea Griego" className='product__img-1' />
                    <h6>Vitalínea Griego</h6>
                </div>
                <div className='products__item'>
                    <img src={product2} alt="Vitalínea sin Azúcar" className='product__img-2' />
                    <h6>Vitalínea sin Azúcar</h6>
                </div>
                <div className='products__item'>
                    <img src={product3} alt="Vitalínea Bebible" className='product__img-3' />
                    <h6>Vitalínea Bebible</h6>
                </div>
            </div>
            </Fade>
        </article>
    );
};

export default Products;