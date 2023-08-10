import React from 'react';

const Dropdown = ({ item, subItems }) => {
  return (
    <div className="dropdown">
      <a className="nav-link dropdown-toggle" href="#" id={`navbarDropdown${item.id}`} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {item.label}
      </a>
      <div className="dropdown-menu" aria-labelledby={`navbarDropdown${item.id}`}>
        {subItems.map(subItem => (
          <a className="dropdown-item" href={subItem.link} key={subItem.id}>
            {subItem.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;