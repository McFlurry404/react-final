import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/favorites">Избранное</Link>
      </nav>
    </header>
  );
}

export default Header;
