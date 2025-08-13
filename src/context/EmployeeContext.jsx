import { createContext, useContext, useState } from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployeesState] = useState([]);

  const addEmployee = (employeeData) => {
    const newEmployee = {
      ...employeeData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    setEmployeesState((prev) => [...prev, newEmployee]);
    return newEmployee;
  };

  const setEmployees = (employees) => {
    setEmployeesState(employees);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        setEmployees,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useEmployee must be used within EmployeeProvider");
  }
  return context;
};
