import React from "react";
import "./create-employee.scss";
import Header from "../../Components/Header/header";
import CreateEmployeeForm from "../../Components/Form/form";
import Footer from "../../Components/Footer/footer";

function CreateEmployee() {

  return (
    <div className="home-container">
      <Header link={"/employee-list"} linkName={"View current employees"} />
      <main className="home-main">
        <CreateEmployeeForm />
      </main>
      <Footer />
    </div>
  );
}

export default CreateEmployee;
