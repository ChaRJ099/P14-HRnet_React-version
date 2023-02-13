import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "../Pages/create-Employee/create-employee";
import EmployeeList from "../Pages/employee-list/employee-list";

function RoutesPath() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter >
  );
}

export default RoutesPath;
