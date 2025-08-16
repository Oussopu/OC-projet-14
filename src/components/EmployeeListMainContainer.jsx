import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomHeaderComponent from "./CustomHeaderComponent.jsx";
import "../../app.css";

ModuleRegistry.registerModules([AllCommunityModule]);

const EmployeeListMainContainer = () => {
  const gridRef = useRef();
  const [searchText, setSearchText] = useState("");
  const employees = useSelector((state) => state.employees.employees);

  const onGridReady = (params) => {
    gridRef.current = params.api;
    params.api.sizeColumnsToFit();
  };

  const onSearchChange = (event) => {
    setSearchText(event.target.value);
    if (gridRef.current) {
      gridRef.current.setQuickFilter(event.target.value);
    }
  };

  const [columnDefs] = useState([
    {
      field: "firstName",
      headerName: "First Name",
      sortable: true,
      filter: true,
      headerComponent: CustomHeaderComponent,
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      sortable: true,
      filter: true,
      headerComponent: CustomHeaderComponent,
      width: 150,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      sortable: true,
      filter: true,
      headerComponent: CustomHeaderComponent,
      width: 150,
    },
    {
      field: "department",
      headerName: "Department",
      sortable: true,
      filter: true,
      headerComponent: CustomHeaderComponent,
      width: 150,
    },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      sortable: true,
      filter: true,
      headerComponent: CustomHeaderComponent,
      width: 150,
    },
    {
      field: "street",
      headerName: "Street",
      sortable: true,
      filter: true,
      headerComponent: CustomHeaderComponent,
      width: 150,
    },
    {
      field: "city",
      headerName: "City",
      sortable: true,
      filter: true,
      headerComponent: CustomHeaderComponent,
      width: 150,
    },
    {
      field: "state",
      headerName: "State",
      sortable: true,
      filter: true,
      headerComponent: CustomHeaderComponent,
      width: 150,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      sortable: true,
      filter: true,
      headerComponent: CustomHeaderComponent,
      width: 150,
    },
  ]);

  const defaultColDef = useMemo(() => ({ sortable: true, filter: true }), []);

  const getRowStyle = (params) => {
    if (params.node.rowIndex % 2 === 1) {
      return { background: "#f2f2f2" };
    }
    return null;
  };

  return (
    <div
      className="container"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <h1>Current Employees</h1>
      <div
        className="ag-theme-alpine"
        style={{
          position: "relative",
          height: "600px",
          width: "80%",
          borderRadius: "0",
          marginTop: "40px",
        }}
      >
        <div
          style={{ position: "absolute", top: "-40px", right: "0", zIndex: 1 }}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={onSearchChange}
            style={{
              padding: "4px",
              width: "150px",
              height: "20px",
              margin: "10px",
            }}
          />
        </div>
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
          getRowStyle={getRowStyle}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[5, 10, 20, 50]}
        />
      </div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeeListMainContainer;
