import React from "react";
import "./employee-list.scss";
import Header from "../../Components/Header/header";
import FilteredTab from "../../Components/Filtered-Table/filtered-tab";
import Footer from "../../Components/Footer/footer";

function EmployeeList() {
  return (
    <div className="employee-list-container">
      <Header />
      <main className="employee-list-main">
        <h2>Current Employees</h2>
        <FilteredTab />
      </main>
      <Footer />
    </div>
  );
}

export default EmployeeList;
