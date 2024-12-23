import React, { useState } from 'react';

function Aside({ categories = [], onFilterChange }) { // Добавляем дефолтное значение для categories

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    onFilterChange(event.target.value);  // Передаем выбранную категорию в родительский компонент
  };

  return (
    <aside className="aside">
      <h2>Фильтры</h2>
      <div className="filter">
        <label htmlFor="category">Категория:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Все</option>
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))
          ) : (
            <option disabled>Загружаются категории...</option>
          )}
        </select>
      </div>
    </aside>
  );
}

export default Aside;
