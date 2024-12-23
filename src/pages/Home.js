import React, { useEffect, useState } from 'react';
import WeaponCard from '../components/WeaponCard';

function Home() {
  const [weapons, setWeapons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/weapons')
      .then(response => response.json())
      .then(data => {
        setWeapons(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Ошибка при загрузке данных');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <h1>Список оружия</h1>
      <div className="weapon-list">
        {weapons.map(weapon => (
          <WeaponCard key={weapon.id} weapon={weapon} />
        ))}
      </div>
    </main>
  );
}

export default Home;
