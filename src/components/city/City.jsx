import './City.css';

export const City = ({ ...city }) => {
  return (
    <article>
      <h2>{city.name}</h2>
      <li>{city.stateSky.description}</li>
      <li>{city.temperatures.max}</li>
      <li>{city.temperatures.min}</li>
    </article>
  );
};
