import React from 'react';
import NavBarPresentation from './NavBarPresentation';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBarContainer = () => {
  const navItems = [
    { id: 1, label: 'Inicio', link: '/' },
    { id: 2, label: 'Acerca de', link: '/about' },
    { id: 3, label: 'Productos', link: '/products'},
    { id: 4, label: 'Contacto', link: '/contact' },
  ]

  return (
    <NavBarPresentation items={navItems} />
  )
}

export default NavBarContainer;