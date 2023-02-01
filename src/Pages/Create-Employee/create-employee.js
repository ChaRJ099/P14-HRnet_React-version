import React from "react";
import "./create-employee.scss";
import Header from "../../Components/Header/header";
import CreateEmployeeForm from "../../Components/Form/form";
import Footer from "../../Components/Footer/footer";

function CreateEmployee() {

  return (
    <div className="create-container">
      <Header link={"/employee-list"} linkName={"View current employees"} />
      <main className="create-main">
        <section className="create-main-section">
          <div>
            <h1 className="create-title">Create Employee</h1>
            <CreateEmployeeForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CreateEmployee;
