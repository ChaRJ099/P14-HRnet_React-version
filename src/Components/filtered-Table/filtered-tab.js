import React, { lazy, Suspense } from "react";
import { DataGrid, GridToolbarQuickFilter, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from '@mui/material/styles';
import { useSelector } from "react-redux";
import "./filtered-table.scss";
import { tabColumns } from "../../Data/data-mocked";

const Box = lazy(() => import('@mui/material/Box'));

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
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Box
          sx={{
            p: 0.5,
            pb: 0,
          }}
        >
          <GridToolbarQuickFilter />
        </Box>
      </Suspense>
    </>

  );
}

export default function FilteredTab() {
  const employees = useSelector(state => state.employees);

  const rows = employees.map((employee, index) => {
    employee["id"] = index;
    return employee;
  });

  const columns = tabColumns;

  const objet = [];

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense >
  );
}
