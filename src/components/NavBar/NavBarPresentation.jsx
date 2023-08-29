import React from 'react';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const renderNavItem = item => {
  return (
    <li className="nav-item" key={item.id}>
      {item.subItems ? (
        renderSubItems(item)
      ) : (
        <NavLink to={item.link} className="nav-link">
          {item.label}
        </NavLink>
      )}
    </li>
  );
};

const renderSubItems = item => {
  return (
    <div className="dropdown">
      <NavLink
        className="nav-link dropdown-toggle"
        to={item.link}
        id={`navbarDropdown${item.id}`}
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {item.label}
      </NavLink>
      
    </div>
  );
};

const NavBarPresentation = ({ items }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#3e5380' }}>
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src="src\assets\image\logo.png" alt="Logo de CeramicAR" width="250" height="50" className="mr-3" />
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {items.map(renderNavItem)}
            <li className="nav-item">
              <CartWidget itemCount={0} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarPresentation;
