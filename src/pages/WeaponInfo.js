import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function WeaponInfo() {
  const { id } = useParams();
  const [weapon, setWeapon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/weapons/${id}`)
      .then(response => response.json())
      .then(data => {
        setWeapon(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Ошибка при загрузке данных');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="weapon-info">
      <h1>{weapon.name}</h1>
      <img src={weapon.image} alt={weapon.name} />
      <p>{weapon.description}</p>
      <p>Цена: {weapon.price}</p>
    </div>
  );
}

export default WeaponInfo;
