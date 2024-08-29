// components/Hours.js

import React, { useEffect, useState } from 'react';

const Hours = () => {
  const [hours, setHours] = useState(null);

  useEffect(() => {
    const now = new Date();
    setHours(now.getHours());
  }, []);

  if (hours === null) {
    return null; // o algún tipo de indicador de carga si prefieres
  }

  return (
    <div>
      <h2>Horas del día</h2>
      <p>La hora actual es: {hours}</p>
    </div>
  );
};

export default Hours;
