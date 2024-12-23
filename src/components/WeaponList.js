import React, { useState, useEffect } from 'react';
import weapons from './json';  // Импортируем данные из json.js

function WeaponList() {
  const [filteredWeapons, setFilteredWeapons] = useState(weapons);  // Состояние для отфильтрованных данных

  // Фильтрация по категории
  const handleFilterChange = (category) => {
    if (category) {
      setFilteredWeapons(weapons.filter(weapon => weapon.category === category));
    } else {
      setFilteredWeapons(weapons);
    }
  };

  return (
    <div className="weapon-list">
      <h2>Список оружия</h2>

      <select onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="">Все категории</option>
        <option value="Охотничье">Охотничье</option>
        <option value="Пистолеты">Пистолеты</option>
        <option value="Автоматы">Автоматы</option>
      </select>

      <ul>
        {filteredWeapons.length > 0 ? (
          filteredWeapons.map((weapon) => (
            <li key={weapon.id}>
              <img src={weapon.imageUrl} alt={weapon.name} width={100} />
              <h3>{weapon.name}</h3>
              <p>{weapon.description}</p>
              <p><strong>Цена:</strong> {weapon.price} руб.</p>
            </li>
          ))
        ) : (
          <li>Нет доступных товаров для отображения</li>
        )}
      </ul>
    </div>
  );
}

export default WeaponList;
