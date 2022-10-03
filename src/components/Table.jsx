import React from 'react';

const Table = () => {

    const contenido = [
        {
            title: 'Contenido energético kj/kcal',
            value: '413,2/97,9'
        },
        {
            title: 'Proteínas (g)',
            value: '5.3'
        },
        {
            title: 'Grasas (lípidos) (g)',
            value: '2.1'
        },
        {
            title: 'Grasas saturadas (g)',
            value: '1.4'
        },
        {
            title: ' Carbohidratos (Hidratos de carbono) (g)',
            value: '12.4'
        },
        {
            title: 'Azúcares (g)',
            value: '7.7'
        },
        {
            title: 'Azúcares añadidos (g)  ',
            value: '0.1'
        },
        {
            title: 'Fibra dietética (g) ',
            value: '0.0'
        },
        {
            title: 'Sodio (mg)',
            value: '92.7'
        },
        {
            title: 'Calcio',
            value: '199.6'
        },
        {
            title: '%VNR*',
            value: '22'
        }
    ]

    const isEven = (num) => {
        return num % 2 == 0;
    }

    return (
        <div className='container'>
            <div className='table'>
                <ul>
                    {
                        contenido.map((item, idx) => {
                            return (
                                <li key={idx} className={`table__contents ${isEven(idx) ? 'bg-dark' : ''}`}>
                                    <h5 className='title'>{item.title}</h5>
                                    <h5 className='value'>{item.value}</h5>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Table;