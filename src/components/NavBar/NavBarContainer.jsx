import React from 'react';
import NavBarPresentation from './NavBarPresentation';

const NavBarContainer = () => {
  const navItems = [
    { id: 1, label: 'Inicio', link: '/' },
    { id: 2, label: 'Acerca de', link: '/about' },
    { id: 3, label: 'Productos', subItems: [
      { id: 31, label: 'Deco', link: '/deco' },
      { id: 32, label: 'Vajillas', link: '/vajillas' },
      { id: 33, label: 'Macetas', link: '/macetas' }
    ]},
    { id: 4, label: 'Contacto', link: '/contact' },
  ]

  return (
    <NavBarPresentation items={navItems} />
  )
}

export default NavBarContainer;