import { create } from "zustand";

const useEmployeeStore = create((set) => ({
  employees: [],
  addEmployee: (employee) =>
    set((state) => ({
      employees: [...state.employees, employee],
    })),
  setEmployees: (employees) => set({ employees }),
}));

export default useEmployeeStore;
