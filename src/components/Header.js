import React from 'react';
import Logo from '../assets/img/logo.png';

export const Header = () => {
    return (
        <div>
            <nav className="nav__bar">
                <img 
                    src={Logo}
                    alt=""
                    className="logo" 
                />
            </nav>
        </div>
    )
}

