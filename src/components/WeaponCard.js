import React from 'react';
import { Link } from 'react-router-dom';

function WeaponCard({ weapon }) {
  return (
    <div className="weapon-card">
      <img src={weapon.image} alt={weapon.name} />
      <h2>{weapon.name}</h2>
      <p>{weapon.category}</p>
      <Link to={`/weapon/${weapon.id}`}>Подробнее</Link>
    </div>
  );
}

export default WeaponCard;
