import React from 'react';

const Menu = ({setDisplayNavigationMenu}) => {
    return (
        <button className="menu" onClick={() => setDisplayNavigationMenu(true)}>
              <span className="line"></span>
              <span className="line short"></span>
              <span className="line"></span>
        </button>  
    );
};

export default Menu;