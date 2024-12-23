import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Магазин оружия. Все права защищены.</p>
      <nav>
        <a href="/terms">Условия использования</a>
        <a href="/privacy">Политика конфиденциальности</a>
      </nav>
    </footer>
  );
}

export default Footer;
