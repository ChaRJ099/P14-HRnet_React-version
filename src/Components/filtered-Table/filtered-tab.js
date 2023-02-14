import React from "react";
import { DataGrid, GridToolbarQuickFilter, gridClasses } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import { useSelector } from "react-redux";
import "./filtered-table.scss";
import { tabColumns } from "../../Data/data-mocked";

// MUI theme to custom table style
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

// Search bar component
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

// Table component create with MUI
export default function FilteredTab() {
  const employees = useSelector(state => state.employees);

  // Generation of rows by iterating over the employees array
  const rows = employees.map((employee, index) => {
    employee["id"] = index;
    return employee;
  });

  // Generation of columns by iterating over the tabColumns array
  const columns = tabColumns;
  const objet = [];

  return (
    <Box sx={{
      height: 600, width: 1, maxWidth: 1170,
      '& .super-app-theme--header': {
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
