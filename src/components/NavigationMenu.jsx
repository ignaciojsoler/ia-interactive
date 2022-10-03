import React from 'react';
import { GrClose } from "react-icons/gr";

const NavigationMenu = ({ displayNavigationMenu, setDisplayNavigationMenu }) => {
    return (
        <aside className={`navigation-menu transition ${displayNavigationMenu ? 'display' : ''}`}>
                <button onClick={() => setDisplayNavigationMenu(false)}><GrClose /></button>
                <ul>
                    <li>
                        <a href="#hero" onClick={() => setDisplayNavigationMenu(false)}>Home</a>
                    </li>
                    <li>
                        <a href="#info" onClick={() => setDisplayNavigationMenu(false)}>About us</a>
                    </li>
                    <li>
                        <a href="#products" onClick={() => setDisplayNavigationMenu(false)}>Products</a>
                    </li>
                </ul>
        </aside>
    );
};

export default NavigationMenu;