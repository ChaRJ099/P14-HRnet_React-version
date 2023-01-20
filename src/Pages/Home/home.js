import React from "react";
import "./home.scss";
// import { NavLink } from "react-router-dom";
import Header from "../../Components/Header/header";
import CreateEmployeeForm from "../../Components/Form/form";
import Button from "@mui/material/Button";
import Modal from "../../Components/Modal/modal";
import Footer from "../../Components/Footer/footer";
import { useState } from "react";

function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  // toogle Form display true or false
  const toogleModal = (e) => {
    e.preventDefault();
    return setModalVisible(!modalVisible);
  };

  if (modalVisible) {
    return (
      <div className="home-container">
        <Header />
        <main className="home-main">
          <h2>Create Employee</h2>
          <CreateEmployeeForm />
          <Button type="button" variant="contained" onClick={toogleModal}>
            Submit
          </Button>
          <Modal onClick={toogleModal} />
        </main>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="home-container">
        <Header />
        <main className="home-main">
          <h2>Create Employee</h2>
          <CreateEmployeeForm />
          <Button variant="contained" onClick={toogleModal}>
            Submit
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
