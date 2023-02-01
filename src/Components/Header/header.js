import "./header.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/logo_wealth_health.png";

function Header({ link, linkName }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-title-container">
          <NavLink to="/"><img className="header__logo" src={Logo} alt="logo wealth health" /></NavLink>
          <span className="header__title">Wealth Health |</span>
          <span className="header__title--secondary">HRnet</span>
        </div>
        <nav className="nav">
          <NavLink to={link}>{linkName}</NavLink>
        </nav>
      </div>
      <div className="header__border--gradient"></div>
    </header>
  );
}

export default Header;
