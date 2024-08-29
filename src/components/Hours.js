import React from 'react';

const Hours = () => {
  const now = new Date();
  const hours = now.getHours();

  return (
    <div>
      <h2>Horas del día</h2>
      <p>La hora actual es: {hours}</p>
    </div>
  );
};

export default Hours;
