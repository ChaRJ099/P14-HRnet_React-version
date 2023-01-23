import "./footer.scss";
import WealthLogo from "../../Assets/logo_wealth_health.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <NavLink to="/" className="header-logo-container">
        <img
          className="footer-logo"
          src={WealthLogo}
          alt="Wealth Health Logo"
        />
      </NavLink>
      <p className="footer__text">Wealth Health | Copyright 2022</p>
    </footer>
  );
}

export default Footer;
