import React, { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    const menuItems = document.querySelectorAll('li');

    menuItems.forEach((item) => {
      const submenu = item.querySelector('ul');
      if (submenu) {
        item.addEventListener('mouseover', () => {
          submenu.style.opacity = '1';
          submenu.style.visibility = 'visible';
        });
        item.addEventListener('mouseout', () => {
          submenu.style.opacity = '0';
          submenu.style.visibility = 'hidden';
        });
      }
    });
  }, []);

  return (
    <ul style={menuStyle}>
      <li style={menuItemStyle}>
        <a href="#" style={linkStyle}>Home</a>
      </li>
      <li style={menuItemStyle}>
        <a href="#" style={linkStyle}>Services</a>
        <ul style={submenuStyle}>
          <li style={submenuItemStyle}><a href="#" style={submenuLinkStyle}>Web design</a></li>
          <li style={submenuItemStyle}><a href="#" style={submenuLinkStyle}>Graphics design</a></li>
          <li style={submenuItemStyle}><a href="#" style={submenuLinkStyle}>App development</a></li>
          <li style={submenuItemStyle}><a href="#" style={submenuLinkStyle}>Marketing</a></li>
        </ul>
      </li>
      <li style={menuItemStyle}>
        <a href="#" style={linkStyle}>Blog</a>
      </li>
      <li style={menuItemStyle}>
        <a href="#" style={linkStyle}>About us</a>
      </li>
      <li style={menuItemStyle}>
        <a href="#" style={linkStyle}>Contact us</a>
      </li>
    </ul>
  );
}

const menuStyle = {
  margin: '50px auto',
  width: 'fit-content',
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  gap: '10px',
};

const menuItemStyle = {
  position: 'relative',
  background: '#000',
  transform: 'skewX(25deg)',
};

const linkStyle = {
  display: 'block',
  color: '#fff',
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontFamily: 'Arial, Helvetica',
  fontSize: '14px',
  padding: '1em 2em',
  transform: 'skewX(-25deg)',
};

const submenuStyle = {
  position: 'absolute',
  top: '100%',
  left: '0',
  transform: 'skewX(-25deg)',
  opacity: 0,
  visibility: 'hidden',
  backgroundColor: '#34495e',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  zIndex: 1,
};

const submenuItemStyle = {
  backgroundColor: '#34495e',
};

const submenuLinkStyle = {
  display: 'block',
  color: '#fff',
  textDecoration: 'none',
  padding: '1em 2em',
  transform: 'skewX(25deg)',
};

export default Navbar;

