import { NavLink } from "react-router-dom";

import "./Header.css";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <NavLink to="/" className="header__logo-link">
          <h1 className="header__title">wtwr°</h1>
        </NavLink>
        <h2 className="header__date-location">
          {currentDate}, {weatherData.city}
        </h2>
      </div>

      <div className="header__right">
        <ToggleSwitch />
        <ul className="header__nav">
          <li>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes"
            >
              + Add Clothes
            </button>
          </li>
        </ul>
        <NavLink to="/profile" className="header__profile-link">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="User avatar" className="header__avatar" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
