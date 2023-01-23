import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "../Pages/Create-Employee/create-employee";
import EmployeeList from "../Pages/Employee-list/employee-list";

function RoutesPath() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPath;
