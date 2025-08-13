import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { EmployeeProvider } from "./context/EmployeeContext";
import CreateEmployee from "./pages/create-employee.jsx";
import EmployeeList from "./pages/employee-list.jsx";

const App = () => {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/list" element={<EmployeeList />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
