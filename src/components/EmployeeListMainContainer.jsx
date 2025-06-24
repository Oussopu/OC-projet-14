import { useState, useEffect, useMemo, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import useEmployeeStore from "../stores/employeeStore";

ModuleRegistry.registerModules([AllCommunityModule]);

const EmployeeListMainContainer = () => {
  const gridRef = useRef();
  const employees = useEmployeeStore((state) => state.employees);

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };

  const [columnDefs] = useState([
    {
      field: "firstName",
      headerName: "First Name",
      sortable: true,
      filter: true,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      sortable: true,
      filter: true,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      sortable: true,
      filter: true,
    },
    {
      field: "department",
      headerName: "Department",
      sortable: true,
      filter: true,
    },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      sortable: true,
      filter: true,
    },
    { field: "street", headerName: "Street", sortable: true, filter: true },
    { field: "city", headerName: "City", sortable: true, filter: true },
    { field: "state", headerName: "State", sortable: true, filter: true },
    { field: "zipCode", headerName: "Zip Code", sortable: true, filter: true },
  ]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    [],
  );

  return (
    <div className="container" style={{ width: "100%", height: "100%" }}>
      <h1>Current Employees</h1>
      <div style={{ height: "600px", width: "100%" }}>
        <AgGridReact
          ref={gridRef}
          rowData={employees}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection={{ mode: "multiRow" }}
          domLayout="autoHeight"
          suppressHorizontalScroll={true}
          onGridReady={onGridReady}
        />
      </div>
      <a href="/">Home</a>
    </div>
  );
};

export default EmployeeListMainContainer;
