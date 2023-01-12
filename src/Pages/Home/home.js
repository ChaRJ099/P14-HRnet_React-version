import React from "react";
import "./home.scss";
import { NavLink } from "react-router-dom";
import CreateEmployeeForm from "../../Components/Form/form";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home__title">HRnet</h1>
      </header>
      <nav className="home-nav">
        <NavLink>View current employees</NavLink>
      </nav>
      <main className="home-main">
        <h2>Create Employee</h2>
        <CreateEmployeeForm />
      </main>
    </div>
  );
}

export default Home;
