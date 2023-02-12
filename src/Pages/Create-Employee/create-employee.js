import React, { lazy, Suspense } from "react";
import "./create-employee.scss";
const CreateEmployeeForm = lazy(() => import('../../Components/Form/form'));
const Header = lazy(() => import('../../Components/Header/header'));
const Footer = lazy(() => import('../../Components/Footer/footer'));

function CreateEmployee() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header className="crate-header" link={"/employee-list"} linkName={"View current employees"} />
        <main className="create-main">
          <section className="create-main-section">
            <div>
              <h1 className="create-title">Create Employee</h1>
              <CreateEmployeeForm />
            </div>
          </section>

        </main>

        <Footer />
      </Suspense>
    </>
  );
}

export default CreateEmployee;
