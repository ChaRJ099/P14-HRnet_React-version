import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import "./filtered-table.scss";

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
}

export default function FilteredTab() {
  const employees = useSelector(state => state.employees);

  const rows = employees.map((employee, index) => {
    if (employee.startdate && employee.startdate.$d) {
      employee.startdate = employee.startdate.$d.toLocaleDateString();
    }
    if (employee.birthdate && employee.birthdate.$d) {
      employee.birthdate = employee.birthdate.$d.toLocaleDateString();
    }

    employee["id"] = index;
    return employee;
  })

  const columns = [
    {
      field: "firstname",
      headerName: "First name",
      width: 130,
      editable: true,
    },
    {
      field: "lastname",
      headerName: "Last Name",
      width: 130,
      editable: true,
    },
    {
      field: "startdate",
      headerName: "Start Date",
      width: 130,
      editable: true,
    },
    {
      field: "department",
      headerName: "Department",
      width: 130,
      editable: true,
    },
    {
      field: "birthdate",
      headerName: "Date of Birth",
      width: 130,
      editable: true,
    },
    {
      field: "street",
      headerName: "Street",
      width: 130,
      editable: true,
    },
    {
      field: "city",
      headerName: "City",
      width: 130,
      editable: true,
    },
    {
      field: "state",
      headerName: "State",
      width: 130,
      editable: true,
    },
    {
      field: "zipcode",
      headerName: "Zip Code",
      width: 130,
      editable: true,
    },
  ];
  //   {
  //     id: 1,
  //     firstname: "Snow",
  //     lastname: "Jon",
  //     startdate: "07/03/2014",
  //     department: "Sales",
  //     birthdate: "12/02/1976",
  //     street: "streetA",
  //     city: "CityB",
  //     state: "Alabama",
  //     zipcode: "256486",
  //   },
  //   {
  //     id: 2,
  //     firstname: "Martine",
  //     lastname: "Lock",
  //     startdate: "15/08/2018",
  //     department: "Human Ressources",
  //     birthdate: "12/02/1976",
  //     street: "streetA",
  //     city: "CityB",
  //     state: "Texas",
  //     zipcode: "256486",
  //   },
  //   {
  //     id: 3,
  //     firstname: "Snow",
  //     lastname: "Jon",
  //     startdate: "07/03/2014",
  //     department: "Legal",
  //     birthdate: "12/02/1976",
  //     street: "streetA",
  //     city: "CityB",
  //     state: "California",
  //     zipcode: "256486",
  //   },
  //   {
  //     id: 4,
  //     firstname: "Snow",
  //     lastname: "Jon",
  //     startdate: "07/03/2014",
  //     department: "Marketing",
  //     birthdate: "12/02/1976",
  //     street: "streetA",
  //     city: "CityB",
  //     state: "Ilinois",
  //     zipcode: "256486",
  //   },
  // ];

  const objet = [];

  return (
    <Box sx={{ height: 500, width: 1000 }} className="table">
      <DataGrid
        {...objet}
        rows={rows}
        columns={columns}
        components={{ Toolbar: QuickSearchToolbar }}
      />
    </Box>
  );
}
