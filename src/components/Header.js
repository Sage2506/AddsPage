import React from 'react';
import Logo1 from '../assets/img/logo.png';
import Logo2 from '../assets/img/Asset_1.png';

export const Header = () => {
    return (
        <div>
            <nav className="nav__bar">
              <img
                  src={Logo2}
                  alt=""
                  className="logo"
              />
              <img
                style={{float:"right"}}
                  src={Logo1}
                  alt=""
                  className="logo"
              />
            </nav>
        </div>
    )
}

