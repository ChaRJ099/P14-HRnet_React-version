import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from '@mui/material/styles';
import { useSelector } from "react-redux";
import "./filtered-table.scss";

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
          theme.palette.action.selectedOpacity +
          theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));

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

    // @TODO: retourner la bonne valeur directement dans le reducer

    console.log("1");
    if (employee.startdate && employee.startdate.$d) {
      console.log("2");

      employee.startdate = employee.startdate.$d.toLocaleDateString();
    }
    if (employee.birthdate && employee.birthdate.$d) {
      console.log("3");

      employee.birthdate = employee.birthdate.$d.toLocaleDateString();
    }
    console.log("4");

    employee["id"] = index;
    return employee;
  })

  const columns = [
    {
      field: "firstname",
      headerName: "First name",
      width: 130,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: "lastname",
      headerName: "Last Name",
      width: 130,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: "startdate",
      headerName: "Start Date",
      width: 130,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: "department",
      headerName: "Department",
      width: 130,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: "birthdate",
      headerName: "Date of Birth",
      width: 130,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: "street",
      headerName: "Street",
      width: 130,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: "city",
      headerName: "City",
      width: 130,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: "state",
      headerName: "State",
      width: 130,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: "zipcode",
      headerName: "Zip Code",
      width: 130,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
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
    <Box sx={{
      height: 500, width: 1000,
      '& .super-app-theme--header': {
        // backgroundColor: '#9DACED'
        backgroundColor: '#55326B',
        color: '#fff'
      }
    }} className="table">
      <StripedDataGrid
        {...objet}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        rows={rows}
        columns={columns}
        components={{ Toolbar: QuickSearchToolbar }}
      />
    </Box>
  );
}
