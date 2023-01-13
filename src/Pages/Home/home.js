import React from "react";
import "./home.scss";
import { NavLink } from "react-router-dom";
import CreateEmployeeForm from "../../Components/Form/form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  // toogle Form display true or false
  const toogleModal = (e) => {
    e.preventDefault();
    console.log("modale");
    return setModalVisible(!modalVisible);
  };

  if (modalVisible) {
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
          <Button type="button" variant="primary" onClick={toogleModal}>
            Submit
          </Button>
          <div className="home-modal">
            <span className="home-modal__text">Employee Created!</span>
            <div onClick={toogleModal}>X</div>
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <div className="home-container">
        <header className="home-header">
          <h1 className="home__title">HRnet</h1>
        </header>
        <nav className="home-nav">
          <NavLink to="/employee-list">View current employees</NavLink>
        </nav>
        <main className="home-main">
          <h2>Create Employee</h2>
          <CreateEmployeeForm />
          <Button variant="primary" onClick={toogleModal}>
            Submit
          </Button>
        </main>
      </div>
    );
  }
}

export default Home;
