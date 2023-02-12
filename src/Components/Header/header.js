import "./header.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/logo_wealth_health.png";
// import Nav from "../nav/nav";
// import { useState } from "react";

// function SetPathToNav() {

//   const [pathPage, setPathPage] = useState();
//   const [reload, setReload] = useState(false);

//   // // const navigate = useNavigate();
//   // console.log(window.location)
//   if (!pathPage && window.location.pathname) {
//     setReload(!reload);

//     setPathPage(window.location.pathname);
//   }

//   if (pathPage) {
//     console.log("pathPage", pathPage)
//     return pathPage === "/" ? (<Nav path="/employee-list" navText="View current employees" />) : (<Nav path="/" navText="Create new employee" />)
//   }




// }

function Header({ link, linkName }) {

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-title-container">
          <NavLink to="/"><img className="header__logo" src={Logo} alt="logo wealth health" /></NavLink>
          {/* <span className="header__title">Wealth Health |</span> */}
          <span className="header__title">HRnet</span>
        </div>
        <nav className="header-nav">
          <NavLink to={link}>{linkName}</NavLink>
        </nav>
      </div>
      <div className="header__border--gradient"></div>
    </header>
  );
}

export default Header;
