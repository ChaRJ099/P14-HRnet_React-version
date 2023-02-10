import React, { lazy, Suspense } from "react";
import "./employee-list.scss";
const Header = lazy(() => import('../../Components/Header/header'));
const FilteredTab = lazy(() => import('../../Components/Filtered-Table/filtered-tab'));
const Footer = lazy(() => import('../../Components/Footer/footer'));

function EmployeeList() {
  return (
    <div className="employee-list-container">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default EmployeeList;
