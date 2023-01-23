import React from "react";
import "./create-employee.scss";
// import { NavLink } from "react-router-dom";
import Header from "../../Components/Header/header";
import CreateEmployeeForm from "../../Components/Form/form";
import Button from "@mui/material/Button";
import Modal from "../../Components/Modal/modal";
import SimpleBackdrop from "../../Components/Backdrop/backdrop";
import Footer from "../../Components/Footer/footer";
import { useState } from "react";

function CreateEmployee() {
  // const saveEmployee = () => {
  //   const firstName = document.getElementById("first-name");
  //   const lastName = document.getElementById("last-name");
  //   const dateOfBirth = document.getElementById("date-of-birth");
  //   const startDate = document.getElementById("start-date");
  //   const department = document.getElementById("department");
  //   const street = document.getElementById("street");
  //   const city = document.getElementById("city");
  //   const state = document.getElementById("state");
  //   const zipCode = document.getElementById("zip-code");

  //   const employees = JSON.parse(localStorage.getItem("employees")) || [];
  //   const employee = {
  //     firstName: firstName.value,
  //     lastName: lastName.value,
  //     dateOfBirth: dateOfBirth.value,
  //     startDate: startDate.value,
  //     department: department.value,
  //     street: street.value,
  //     city: city.value,
  //     state: state.value,
  //     zipCode: zipCode.value,
  //   };
  //   employees.push(employee);
  //   localStorage.setItem("employees", JSON.stringify(employees));
  //   // $("#confirmation").modal();
  // };

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
          <h2 className="home-title">Create Employee</h2>
          <CreateEmployeeForm />
          <Button type="button" variant="contained">
            Submit
          </Button>
          <Modal onClick={toogleModal} />
        </main>
        <Footer />
        <SimpleBackdrop />
      </div>
    );
  } else {
    return (
      <div className="home-container">
        <Header />
        <main className="home-main">
          <h2 className="home-title">Create Employee</h2>
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

export default CreateEmployee;
