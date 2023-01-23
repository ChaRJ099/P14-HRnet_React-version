import "./header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
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
