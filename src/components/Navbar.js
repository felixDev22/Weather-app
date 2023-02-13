import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import getLocations from '../redux/countryApi';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const [locationSearch, setLocationSearch] = useState('Kenya');
  const [activeMenu, setActiveMenu] = useState(false);

  const searchResult = (e) => {
    e.preventDefault();
    dispatch(getLocations(locationSearch));
    setLocationSearch('');
  };

  const searchHandler = (e) => {
    setLocationSearch(e.target.value);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <div className="nav-left">
            <i className="fa-solid fa-chevron-left" />
            <span>2023</span>
          </div>
        </Link>
        <div className="app-Name">
          <ul>
            <li>Weather App</li>
          </ul>
        </div>
        <div className="nav-right">
          <div>
            <a href="/" aria-label="search">
              <i className="fa-solid fa-microphone" />
            </a>
          </div>
          <a href="/" aria-label="search">
            <i className="fa-solid fa-magnifying-glass" />
          </a>
        </div>
        {activeMenu ? (
          <form className="search-form" onSubmit={(e) => searchResult(e)}>
            <p className="search-p">Search Country</p>
            <input
              value={locationSearch}
              onChange={(e) => searchHandler(e)}
              placeholder="eg. Paris"
            />
            <button type="submit">
              <i className="fa-solid fa-circle-chevron-left" />
            </button>
            <button type="button" onClick={() => setActiveMenu(true)}>
              <i className="fa-regular fa-circle-xmark" />
            </button>
          </form>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
