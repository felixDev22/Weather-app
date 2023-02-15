import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Country.css';

const Country = ({ name, capital, flag }) => (
  <li>
    <Link to={`/details/${name}`}>
      <div className="c-card">
        <i className="fa-solid fa-chevron-left" id="arrow" />
        <div className="data">
          <h3>{name}</h3>
          <p>{`Capital: ${capital}`}</p>
          <img src={flag} className="flag" alt={name} />
        </div>
      </div>
    </Link>
  </li>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
