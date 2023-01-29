import React from "react";
import "./create-employee.scss";
// import { NavLink } from "react-router-dom";
import Header from "../../Components/Header/header";
import CreateEmployeeForm from "../../Components/Form/form";
import Modal from "../../Components/Modal/modal";
// import SimpleBackdrop from "../../Components/Backdrop/backdrop";
import Footer from "../../Components/Footer/footer";
import { useState } from "react";

function CreateEmployee() {
  const [modalVisible, setModalVisible] = useState(false);

  // toogle Form display true or false
  const toogleModal = (e) => {
    e.preventDefault();

    setModalVisible(!modalVisible);
  };

  if (modalVisible) {
    return (
      <div className="home-container">
        <Header />
        <main className="home-main">
          <h2 className="home-title">Create Employee</h2>
          <CreateEmployeeForm />

          <Modal onClick={toogleModal} />
        </main>
        <Footer />
        <div className="modal-backdrop"></div>;
      </div>
    );
  } else {
    return (
      <div className="home-container">
        <Header />
        <main className="home-main">
          <h2 className="home-title">Create Employee</h2>
          <CreateEmployeeForm toogleFunction={toogleModal} />
          {/* <Button variant="contained" onClick={toogleModal}>
            Submit
          </Button> */}
        </main>
        <Footer />
      </div>
    );
  }
}

export default CreateEmployee;
