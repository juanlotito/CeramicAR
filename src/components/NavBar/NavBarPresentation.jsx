import React from 'react';
import Dropdown from './Dropdown';
import CartWidget from '../CartWidget';

const NavBarPresentation = ({ items }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#3e5380' }}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="src\assets\image\logo.png" alt="Logo de CeramicAR" width="250" height="50" className="mr-3" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {items.map(item => (
              <li className="nav-item" key={item.id}>
                {item.subItems ? (
                  <Dropdown item={item} subItems={item.subItems} />
                ) : (
                  <a className="nav-link" href={item.link}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="nav-item" > 
              <CartWidget itemCount={0} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarPresentation;
