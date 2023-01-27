import React from "react";
import "./create-employee.scss";
// import { NavLink } from "react-router-dom";
import Header from "../../Components/Header/header";
import CreateEmployeeForm from "../../Components/Form/form";
import Modal from "../../Components/Modal/modal";
// import SimpleBackdrop from "../../Components/Backdrop/backdrop";
import Footer from "../../Components/Footer/footer";
import { useState, useEffect } from "react";
import axios from "axios";
// import employees from "../../"
// import { getEmployee } from "../../Utils/services";

function CreateEmployee() {
  const [modalVisible, setModalVisible] = useState(false);
  const [employee, setEmployee] = useState();
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("../../local-json/employees.json", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    )
      .then((response) => setData(response.data))
      .catch(err => console.log(err))
  }, [])

  // toogle Form display true or false
  const toogleModal = (e) => {
    e.preventDefault();
    console.log("test", employee);
    setModalVisible(!modalVisible);
  };

  if (modalVisible) {
    return (
      <div className="home-container">
        <Header />
        <main className="home-main">
          <h2 className="home-title">Create Employee</h2>
          <CreateEmployeeForm />
          {/* <Button type="button" variant="contained">
            Submit
          </Button> */}
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
          <CreateEmployeeForm onClick={toogleModal} />
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
