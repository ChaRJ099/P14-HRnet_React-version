import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
// import { useDemoData } from "@mui/x-data-grid-generator";
import { useSelector } from "react-redux";




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
  console.log("employees", employees);

  const rows = employees.map((employee, index) => {
    employee["id"] = index;
    return employee;
  })
  console.log("rows", rows);


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

  // const rows = [
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

  // Otherwise filter will be applied on fields such as the hidden column id
  // const filteredColumns = React.useMemo(
  //   () => columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
  //   [columns]
  // );

  return (
    <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        {...objet}
        rows={rows}
        columns={columns}
        components={{ Toolbar: QuickSearchToolbar }}
      />
    </Box>
  );
}
