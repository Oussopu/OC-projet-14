import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateEmployee from "./pages/create-employee.jsx";
import EmployeeList from "./pages/employee-list.jsx";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/list" element={<EmployeeList />} />
        </Routes>
      </Router>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
