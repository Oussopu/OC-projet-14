import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = {
        ...action.payload,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        dateOfBirth: action.payload.dateOfBirth
          ? new Date(action.payload.dateOfBirth).toISOString()
          : null,
        startDate: action.payload.startDate
          ? new Date(action.payload.startDate).toISOString()
          : null,
      };
      state.employees.push(newEmployee);
    },
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
  },
});

export const { addEmployee, setEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
