import React, { lazy, Suspense } from "react";
import "./employee-list.scss";
const FilteredTab = lazy(() => import('../../Components/Filtered-Table/filtered-tab'));
const Header = lazy(() => import('../../Components/Header/header'));
const Footer = lazy(() => import('../../Components/Footer/footer'));

function EmployeeList() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header link={"/"} linkName={"Create new employee"} />
        <main className="employee-list-main ">
          <section className="employee-list-section">
            <div className="employee-list-title-container">
              <h1 className="employee-list__title">Current Employees</h1>
            </div>
            <FilteredTab />
          </section>

        </main>

        <Footer />
      </Suspense>
    </>
  );
}

export default EmployeeList;
