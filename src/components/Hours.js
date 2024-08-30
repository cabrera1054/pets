// components/Hours.js

import React, { useEffect, useState } from 'react';

const Hours = () => {
  const [hours, setHours] = useState('');

  useEffect(() => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 (domingo) a 6 (sábado)
    const currentHour = now.getHours();
    
    // Horarios de apertura
    const weekdayHours = '10 a.m. a 4 p.m.';
    const weekendHours = '9 a.m. a 8 p.m.';

    let openingHours;

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      // Sábado o Domingo
      openingHours = currentHour >= 9 && currentHour <= 20 
        ? `El refugio está abierto: ${weekendHours}` 
        : `El refugio está cerrado. Horario de apertura: ${weekendHours}`;
    } else {
      // Lunes a Viernes
      openingHours = currentHour >= 10 && currentHour <= 16 
        ? `El refugio está abierto: ${weekdayHours}` 
        : `El refugio está cerrado. Horario de apertura: ${weekdayHours}`;
    }

    setHours(openingHours);
  }, []);

  return (
    <div>
      <h2>Horas de apertura del refugio</h2>
      <p>{hours}</p>
    </div>
  );
};

export default Hours;
