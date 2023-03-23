import { Link } from 'react-router-dom';

const LOCATIONS = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function Locations (): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {LOCATIONS.map((city)=>(
          <li key={city} className="locations__item">
            <Link className="locations__item-link tabs__item" to="/">
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
