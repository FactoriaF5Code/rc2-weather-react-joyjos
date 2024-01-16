import axios from 'axios';
import { useState, useEffect } from 'react';
import { City } from '../city/City';

export const Weather = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('https://www.el-tiempo.net/api/json/v2/home')
      .then((response) => {
        console.log(response.data);
        setData(response.data.ciudades);
      })
      .catch((err) => console.error('Error al obtener datos:', err));
  }, []);

  return (
    <main>
      <h1>Weather</h1>
      {data && Array.isArray(data)
        ? data.map((city) => <City key={city.id} {...city} />)
        : console.error('La variable no es un array o es undefined')}
    </main>
  );
};
