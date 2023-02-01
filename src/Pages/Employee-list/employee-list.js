import React from "react";
import "./employee-list.scss";
import Header from "../../Components/Header/header";
import FilteredTab from "../../Components/Filtered-Table/filtered-tab";
import Footer from "../../Components/Footer/footer";

function EmployeeList() {
  return (
    <div className="employee-list-container">
      <Header link={"/"} linkName={"Create new employee"} />
      <main className="employee-list-main">
        <section className="employee-list-section">
          <div className="employee-list-title">
            <h1>Current Employees</h1>
            <FilteredTab />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default EmployeeList;
