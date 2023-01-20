import "./header.scss";
import WealthLogo from "../../Assets/logo_wealth_health.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header-logo-container">
        <img
          className="header-logo"
          src={WealthLogo}
          alt="Wealth Health Logo"
        />
      </NavLink>
      <div className="header-title-container">
        <h1 className="header__title">HRnet</h1>
      </div>
      <nav className="nav">
        <NavLink to="/employee-list">View current employees</NavLink>
      </nav>
    </header>
  );
}

export default Header;
